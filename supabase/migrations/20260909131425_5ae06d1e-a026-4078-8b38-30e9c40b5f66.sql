
revoke all on function public.is_workspace_member(uuid) from anon, public;
revoke all on function public.has_workspace_role(uuid, public.workspace_role[]) from anon, public;
revoke all on function public.owns_organization(uuid) from anon, public;
revoke all on function public.app_workspace_id(uuid) from anon, public;
revoke all on function public.page_app_id(uuid) from anon, public;
grant execute on function public.is_workspace_member(uuid) to authenticated;
grant execute on function public.has_workspace_role(uuid, public.workspace_role[]) to authenticated;
grant execute on function public.owns_organization(uuid) to authenticated;
grant execute on function public.app_workspace_id(uuid) to authenticated;
grant execute on function public.page_app_id(uuid) to authenticated;
