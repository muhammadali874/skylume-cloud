import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import type { WorkspaceRole, Permission } from "@/lib/permissions";
import { can } from "@/lib/permissions";

export type Workspace = {
  id: string;
  organization_id: string;
  name: string;
  description: string | null;
  industry: string | null;
  country: string | null;
  timezone: string | null;
  primary_objective: string | null;
};

export type Membership = { workspace_id: string; role: WorkspaceRole; workspaces: Workspace | null };

const STORAGE_KEY = "skylume-active-workspace";

type WorkspaceContextValue = {
  memberships: Membership[];
  workspace: Workspace | null;
  role: WorkspaceRole | null;
  loading: boolean;
  error: unknown;
  refetch: () => void;
  setActiveWorkspace: (id: string) => void;
  allows: (permission: Permission) => boolean;
};

const WorkspaceContext = createContext<WorkspaceContextValue>({
  memberships: [],
  workspace: null,
  role: null,
  loading: true,
  error: null,
  refetch: () => {},
  setActiveWorkspace: () => {},
  allows: () => false,
});

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setActiveId(window.localStorage.getItem(STORAGE_KEY));
  }, []);

  const query = useQuery({
    queryKey: ["memberships", user?.id],
    enabled: Boolean(user?.id),
    queryFn: async (): Promise<Membership[]> => {
      const { data, error } = await supabase
        .from("workspace_members")
        .select(
          "workspace_id, role, workspaces(id, organization_id, name, description, industry, country, timezone, primary_objective)",
        )
        .order("created_at", { ascending: true });
      if (error) throw error;
      return (data ?? []) as unknown as Membership[];
    },
  });

  const memberships = query.data ?? [];

  const active = useMemo(() => {
    if (memberships.length === 0) return null;
    return memberships.find((m) => m.workspace_id === activeId) ?? memberships[0]!;
  }, [memberships, activeId]);

  const value: WorkspaceContextValue = {
    memberships,
    workspace: active?.workspaces ?? null,
    role: active?.role ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: () => void query.refetch(),
    setActiveWorkspace: (id) => {
      window.localStorage.setItem(STORAGE_KEY, id);
      setActiveId(id);
    },
    allows: (permission) => can(active?.role ?? null, permission),
  };

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  return useContext(WorkspaceContext);
}
