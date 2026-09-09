
create type public.workspace_role as enum ('owner','admin','manager','member','viewer');
create type public.app_status as enum ('draft','active','archived');

create or replace function public.set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql set search_path = public;

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  full_name text,
  avatar_url text,
  onboarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "own profile read" on public.profiles for select to authenticated using (user_id = auth.uid());
create policy "own profile insert" on public.profiles for insert to authenticated with check (user_id = auth.uid());
create policy "own profile update" on public.profiles for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create trigger profiles_updated before update on public.profiles for each row execute function public.set_updated_at();

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.organizations to authenticated;
grant all on public.organizations to service_role;
alter table public.organizations enable row level security;
create trigger organizations_updated before update on public.organizations for each row execute function public.set_updated_at();

create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  description text,
  industry text,
  country text,
  timezone text,
  primary_objective text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.workspaces to authenticated;
grant all on public.workspaces to service_role;
alter table public.workspaces enable row level security;
create trigger workspaces_updated before update on public.workspaces for each row execute function public.set_updated_at();

create table public.workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null,
  role public.workspace_role not null default 'member',
  created_at timestamptz not null default now(),
  unique (workspace_id, user_id)
);
grant select, insert, update, delete on public.workspace_members to authenticated;
grant all on public.workspace_members to service_role;
alter table public.workspace_members enable row level security;

create table public.workspace_invitations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  email text not null,
  role public.workspace_role not null default 'member',
  status text not null default 'pending',
  invited_by uuid not null,
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.workspace_invitations to authenticated;
grant all on public.workspace_invitations to service_role;
alter table public.workspace_invitations enable row level security;

create table public.apps (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  status public.app_status not null default 'draft',
  ai_request text,
  created_by uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, slug)
);
grant select, insert, update, delete on public.apps to authenticated;
grant all on public.apps to service_role;
alter table public.apps enable row level security;
create trigger apps_updated before update on public.apps for each row execute function public.set_updated_at();

create table public.app_pages (
  id uuid primary key default gen_random_uuid(),
  app_id uuid not null references public.apps(id) on delete cascade,
  name text not null,
  slug text not null,
  configuration jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.app_pages to authenticated;
grant all on public.app_pages to service_role;
alter table public.app_pages enable row level security;
create trigger app_pages_updated before update on public.app_pages for each row execute function public.set_updated_at();

create table public.app_components (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.app_pages(id) on delete cascade,
  component_type text not null,
  configuration jsonb not null default '{}'::jsonb,
  position jsonb not null default '{}'::jsonb,
  size jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.app_components to authenticated;
grant all on public.app_components to service_role;
alter table public.app_components enable row level security;
create trigger app_components_updated before update on public.app_components for each row execute function public.set_updated_at();

create table public.integrations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  provider text not null,
  name text not null,
  status text not null default 'disconnected',
  configuration jsonb not null default '{}'::jsonb,
  created_by uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.integrations to authenticated;
grant all on public.integrations to service_role;
alter table public.integrations enable row level security;
create trigger integrations_updated before update on public.integrations for each row execute function public.set_updated_at();

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  user_id uuid not null,
  action text not null,
  resource_type text,
  resource_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
grant select, insert on public.audit_logs to authenticated;
grant all on public.audit_logs to service_role;
alter table public.audit_logs enable row level security;

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  user_id uuid not null,
  type text not null default 'system',
  title text not null,
  body text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.notifications to authenticated;
grant all on public.notifications to service_role;
alter table public.notifications enable row level security;

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null unique references public.workspaces(id) on delete cascade,
  plan text not null default 'free',
  status text not null default 'active',
  billing_cycle text not null default 'monthly',
  usage jsonb not null default '{}'::jsonb,
  limits jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.subscriptions to authenticated;
grant all on public.subscriptions to service_role;
alter table public.subscriptions enable row level security;
create trigger subscriptions_updated before update on public.subscriptions for each row execute function public.set_updated_at();

-- security definer helpers
create or replace function public.is_workspace_member(_ws uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.workspace_members m where m.workspace_id = _ws and m.user_id = auth.uid());
$$;

create or replace function public.has_workspace_role(_ws uuid, _roles public.workspace_role[])
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.workspace_members m where m.workspace_id = _ws and m.user_id = auth.uid() and m.role = any(_roles));
$$;

create or replace function public.owns_organization(_org uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.organizations o where o.id = _org and o.owner_id = auth.uid());
$$;

create or replace function public.app_workspace_id(_app uuid)
returns uuid language sql stable security definer set search_path = public as $$
  select workspace_id from public.apps where id = _app;
$$;

create or replace function public.page_app_id(_page uuid)
returns uuid language sql stable security definer set search_path = public as $$
  select app_id from public.app_pages where id = _page;
$$;

-- policies
create policy "members visible to workspace" on public.workspace_members for select to authenticated
  using (user_id = auth.uid() or public.is_workspace_member(workspace_id));
create policy "self join new workspace" on public.workspace_members for insert to authenticated
  with check (user_id = auth.uid() or public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));
create policy "admins manage members" on public.workspace_members for update to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]))
  with check (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));
create policy "admins remove members" on public.workspace_members for delete to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]) or user_id = auth.uid());

create policy "org read" on public.organizations for select to authenticated using (owner_id = auth.uid());
create policy "org create" on public.organizations for insert to authenticated with check (owner_id = auth.uid());
create policy "org update" on public.organizations for update to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());
create policy "org delete" on public.organizations for delete to authenticated using (owner_id = auth.uid());

create policy "workspace read" on public.workspaces for select to authenticated using (public.is_workspace_member(id));
create policy "workspace create" on public.workspaces for insert to authenticated with check (public.owns_organization(organization_id));
create policy "workspace update" on public.workspaces for update to authenticated
  using (public.has_workspace_role(id, array['owner','admin']::public.workspace_role[]))
  with check (public.has_workspace_role(id, array['owner','admin']::public.workspace_role[]));
create policy "workspace delete" on public.workspaces for delete to authenticated
  using (public.has_workspace_role(id, array['owner']::public.workspace_role[]));

create policy "invites read" on public.workspace_invitations for select to authenticated using (public.is_workspace_member(workspace_id));
create policy "invites create" on public.workspace_invitations for insert to authenticated
  with check (invited_by = auth.uid() and public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));
create policy "invites update" on public.workspace_invitations for update to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]))
  with check (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));
create policy "invites delete" on public.workspace_invitations for delete to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));

create policy "apps read" on public.apps for select to authenticated using (public.is_workspace_member(workspace_id));
create policy "apps create" on public.apps for insert to authenticated
  with check (created_by = auth.uid() and public.has_workspace_role(workspace_id, array['owner','admin','manager','member']::public.workspace_role[]));
create policy "apps update" on public.apps for update to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin','manager','member']::public.workspace_role[]))
  with check (public.has_workspace_role(workspace_id, array['owner','admin','manager','member']::public.workspace_role[]));
create policy "apps delete" on public.apps for delete to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin','manager']::public.workspace_role[]));

create policy "pages read" on public.app_pages for select to authenticated using (public.is_workspace_member(public.app_workspace_id(app_id)));
create policy "pages write" on public.app_pages for all to authenticated
  using (public.has_workspace_role(public.app_workspace_id(app_id), array['owner','admin','manager','member']::public.workspace_role[]))
  with check (public.has_workspace_role(public.app_workspace_id(app_id), array['owner','admin','manager','member']::public.workspace_role[]));

create policy "components read" on public.app_components for select to authenticated
  using (public.is_workspace_member(public.app_workspace_id(public.page_app_id(page_id))));
create policy "components write" on public.app_components for all to authenticated
  using (public.has_workspace_role(public.app_workspace_id(public.page_app_id(page_id)), array['owner','admin','manager','member']::public.workspace_role[]))
  with check (public.has_workspace_role(public.app_workspace_id(public.page_app_id(page_id)), array['owner','admin','manager','member']::public.workspace_role[]));

create policy "integrations read" on public.integrations for select to authenticated using (public.is_workspace_member(workspace_id));
create policy "integrations write" on public.integrations for all to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin','manager']::public.workspace_role[]))
  with check (public.has_workspace_role(workspace_id, array['owner','admin','manager']::public.workspace_role[]));

create policy "audit read" on public.audit_logs for select to authenticated
  using ((workspace_id is null and user_id = auth.uid()) or public.is_workspace_member(workspace_id));
create policy "audit insert" on public.audit_logs for insert to authenticated with check (user_id = auth.uid());

create policy "notifications own" on public.notifications for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "subscription read" on public.subscriptions for select to authenticated using (public.is_workspace_member(workspace_id));
create policy "subscription create" on public.subscriptions for insert to authenticated
  with check (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));
create policy "subscription update" on public.subscriptions for update to authenticated
  using (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]))
  with check (public.has_workspace_role(workspace_id, array['owner','admin']::public.workspace_role[]));

create index apps_workspace_idx on public.apps(workspace_id);
create index members_user_idx on public.workspace_members(user_id);
create index audit_ws_idx on public.audit_logs(workspace_id, created_at desc);
create index notif_user_idx on public.notifications(user_id, created_at desc);
