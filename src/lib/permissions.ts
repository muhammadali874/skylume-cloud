export type WorkspaceRole = "owner" | "admin" | "manager" | "member" | "viewer";

export const ROLES: { value: WorkspaceRole; label: string; description: string }[] = [
  { value: "owner", label: "Owner", description: "Full control including billing and deletion" },
  { value: "admin", label: "Admin", description: "Manage workspace, members and integrations" },
  { value: "manager", label: "Manager", description: "Manage apps, integrations and content" },
  { value: "member", label: "Member", description: "Create and edit apps" },
  { value: "viewer", label: "Viewer", description: "Read-only access" },
];

export const ROLE_RANK: Record<WorkspaceRole, number> = {
  owner: 5,
  admin: 4,
  manager: 3,
  member: 2,
  viewer: 1,
};

/** Centralised permission catalogue. Never inline role checks in components. */
export type Permission =
  | "workspace.view"
  | "workspace.manage"
  | "workspace.delete"
  | "members.view"
  | "members.manage"
  | "apps.view"
  | "apps.create"
  | "apps.edit"
  | "apps.delete"
  | "apps.publish"
  | "integrations.view"
  | "integrations.manage"
  | "audit.view"
  | "billing.view"
  | "billing.manage";

const MATRIX: Record<Permission, WorkspaceRole[]> = {
  "workspace.view": ["owner", "admin", "manager", "member", "viewer"],
  "workspace.manage": ["owner", "admin"],
  "workspace.delete": ["owner"],
  "members.view": ["owner", "admin", "manager", "member", "viewer"],
  "members.manage": ["owner", "admin"],
  "apps.view": ["owner", "admin", "manager", "member", "viewer"],
  "apps.create": ["owner", "admin", "manager", "member"],
  "apps.edit": ["owner", "admin", "manager", "member"],
  "apps.delete": ["owner", "admin", "manager"],
  "apps.publish": ["owner", "admin", "manager"],
  "integrations.view": ["owner", "admin", "manager", "member", "viewer"],
  "integrations.manage": ["owner", "admin", "manager"],
  "audit.view": ["owner", "admin", "manager"],
  "billing.view": ["owner", "admin", "manager", "member", "viewer"],
  "billing.manage": ["owner", "admin"],
};

export function can(role: WorkspaceRole | null | undefined, permission: Permission): boolean {
  if (!role) return false;
  return MATRIX[permission].includes(role);
}

export function roleLabel(role: WorkspaceRole): string {
  return ROLES.find((r) => r.value === role)?.label ?? role;
}
