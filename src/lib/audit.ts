import { supabase } from "@/integrations/supabase/client";

export type AuditAction =
  | "auth.login"
  | "auth.logout"
  | "workspace.created"
  | "workspace.updated"
  | "app.created"
  | "app.updated"
  | "app.deleted"
  | "app.duplicated"
  | "member.invited"
  | "member.role_changed"
  | "member.removed"
  | "integration.registered"
  | "settings.changed";

/**
 * Records an audit entry. Never throws — auditing must not break a user flow.
 * Only non-sensitive metadata should be passed here.
 */
export async function logAudit(input: {
  workspaceId?: string | null;
  action: AuditAction;
  resourceType?: string;
  resourceId?: string;
  metadata?: Record<string, unknown>;
}) {
  try {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;
    await supabase.from("audit_logs").insert({
      workspace_id: input.workspaceId ?? null,
      user_id: data.user.id,
      action: input.action,
      resource_type: input.resourceType ?? null,
      resource_id: input.resourceId ?? null,
      metadata: {
        ...(input.metadata ?? {}),
        client: typeof navigator === "undefined" ? "server" : navigator.userAgent.slice(0, 180),
      },
    });
  } catch {
    /* auditing is best-effort */
  }
}

export async function notify(input: {
  userId: string;
  workspaceId?: string | null;
  type: string;
  title: string;
  body?: string;
}) {
  try {
    await supabase.from("notifications").insert({
      user_id: input.userId,
      workspace_id: input.workspaceId ?? null,
      type: input.type,
      title: input.title,
      body: input.body ?? null,
    });
  } catch {
    /* best-effort */
  }
}
