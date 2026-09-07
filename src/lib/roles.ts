export const ADMIN_ROLES = ["admin", "superadmin"] as const;
export type AdminRole = (typeof ADMIN_ROLES)[number];

// NextAuth does not type `role`/`id` on the session user, so read them through
// an unknown cast instead of `any`.
export function getUserRole(user: unknown): string | undefined {
  return (user as { role?: string } | null | undefined)?.role;
}

export function getUserId(user: unknown): string | undefined {
  return (user as { id?: string } | null | undefined)?.id;
}

// Roles that may access the admin dashboard / content management APIs.
export function isAdminRole(role: unknown): role is AdminRole {
  return typeof role === "string" && (ADMIN_ROLES as readonly string[]).includes(role);
}

// The top-level role that can create and manage other admin users.
export function isSuperAdmin(role: unknown): boolean {
  return role === "superadmin";
}
