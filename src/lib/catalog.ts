/** Static marketing + platform catalogues (no fabricated metrics). */

export const BRAND = {
  name: "SKYLUME AUTOMATION CLOUD",
  short: "Skylume",
  company: "SKYLUME MUHAMMAD™ (Private) Limited",
  tagline: "Build Apps. Connect Anything. Automate Everything.",
  subheadline:
    "Create powerful business applications, automate workflows and connect your favorite tools — without needing to build everything from scratch.",
};

export type Phase = "phase-1" | "phase-2";

export const PLATFORM_FEATURES: {
  title: string;
  description: string;
  icon: string;
  phase: Phase;
}[] = [
  {
    title: "AI App Builder",
    description: "Describe an application in natural language and shape it in a structured builder.",
    icon: "Sparkles",
    phase: "phase-1",
  },
  {
    title: "Workflow Automation",
    description: "Connect triggers, conditions and actions on a visual canvas.",
    icon: "Workflow",
    phase: "phase-2",
  },
  {
    title: "Integrations",
    description: "Connect APIs, SaaS tools and internal business systems securely.",
    icon: "Plug",
    phase: "phase-1",
  },
  {
    title: "AI Agents",
    description: "Build agents that can reason, call tools and run your workflows.",
    icon: "Bot",
    phase: "phase-2",
  },
  {
    title: "Database",
    description: "Model structured business data, relationships and access rules.",
    icon: "Database",
    phase: "phase-1",
  },
  {
    title: "APIs",
    description: "Expose secure, versioned APIs from the data and logic you build.",
    icon: "Code2",
    phase: "phase-2",
  },
  {
    title: "Analytics",
    description: "Monitor applications, workflow runs and business activity.",
    icon: "BarChart3",
    phase: "phase-2",
  },
  {
    title: "Enterprise Security",
    description: "Roles, permissions, workspace isolation, authentication and audit logs.",
    icon: "ShieldCheck",
    phase: "phase-1",
  },
];

export const USE_CASES = [
  { title: "CRM", description: "Leads, contacts, pipelines and follow-ups." },
  { title: "ERP", description: "Operations, resources and internal processes." },
  { title: "Accounting", description: "Invoices, ledgers and reconciliation views." },
  { title: "Sales", description: "Quotes, deals and revenue tracking." },
  { title: "Marketing", description: "Campaign operations and lifecycle activity." },
  { title: "Customer Support", description: "Tickets, SLAs and customer timelines." },
  { title: "Project Management", description: "Tasks, milestones and delivery tracking." },
  { title: "Inventory", description: "Stock, warehouses and movement records." },
  { title: "HR", description: "People, onboarding and internal requests." },
  { title: "Finance", description: "Budgets, approvals and financial reporting." },
  { title: "E-commerce", description: "Catalogues, orders and fulfilment operations." },
  { title: "Architecture & Construction", description: "Projects, sites, drawings and site visits." },
  { title: "Business Automation", description: "Replace manual, repetitive internal processes." },
  { title: "AI Agents", description: "Assistants that operate on your business data." },
];

export const INTEGRATION_CATEGORIES = [
  "Communication",
  "Email",
  "CRM",
  "Accounting",
  "Payments",
  "Productivity",
  "AI",
  "Storage",
  "Developer Tools",
  "Marketing",
] as const;

export type IntegrationStatus = "available" | "coming-soon";

export const INTEGRATIONS: {
  provider: string;
  name: string;
  category: (typeof INTEGRATION_CATEGORIES)[number];
  status: IntegrationStatus;
  description: string;
}[] = [
  {
    provider: "custom_api",
    name: "Custom REST API",
    category: "Developer Tools",
    status: "available",
    description: "Register any REST endpoint your workspace will call from server-side functions.",
  },
  {
    provider: "custom_webhook",
    name: "Custom Webhook",
    category: "Developer Tools",
    status: "available",
    description: "Register an outbound webhook target for future workflow deliveries.",
  },
  { provider: "telnyx", name: "Telnyx", category: "Communication", status: "coming-soon", description: "Voice, SMS and call recording infrastructure." },
  { provider: "whatsapp", name: "WhatsApp", category: "Communication", status: "coming-soon", description: "Business messaging and conversation automation." },
  { provider: "slack", name: "Slack", category: "Communication", status: "coming-soon", description: "Channel and direct message notifications." },
  { provider: "resend", name: "Resend", category: "Email", status: "coming-soon", description: "Transactional email delivery." },
  { provider: "gmail", name: "Gmail", category: "Email", status: "coming-soon", description: "Read and send mail from connected mailboxes." },
  { provider: "hubspot", name: "HubSpot", category: "CRM", status: "coming-soon", description: "Contacts, companies and deal synchronisation." },
  { provider: "salesforce", name: "Salesforce", category: "CRM", status: "coming-soon", description: "Enterprise CRM object synchronisation." },
  { provider: "stripe", name: "Stripe", category: "Payments", status: "coming-soon", description: "Subscriptions, invoices and payment events." },
  { provider: "google_sheets", name: "Google Sheets", category: "Productivity", status: "coming-soon", description: "Read and write spreadsheet rows." },
  { provider: "google_calendar", name: "Google Calendar", category: "Productivity", status: "coming-soon", description: "Events, availability and scheduling." },
  { provider: "google_drive", name: "Google Drive", category: "Storage", status: "coming-soon", description: "Files, folders and document storage." },
  { provider: "qwen", name: "Qwen", category: "AI", status: "coming-soon", description: "Large language model reasoning and generation." },
  { provider: "groq", name: "Groq", category: "AI", status: "coming-soon", description: "Low-latency model inference." },
];

export const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For individuals exploring the platform.",
    monthly: 0,
    annual: 0,
    highlight: false,
    limits: { members: "1", apps: "2", workflows: "0 (Phase 2)", ai: "Trial credits", api: "1,000 calls", storage: "500 MB" },
    features: ["1 workspace", "2 apps", "App builder foundation", "Community documentation"],
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "For small businesses.",
    monthly: 29,
    annual: 290,
    highlight: false,
    limits: { members: "3", apps: "5", workflows: "10 (Phase 2)", ai: "Standard", api: "25,000 calls", storage: "5 GB" },
    features: ["Everything in Free", "3 team members", "Integration registry", "Email support"],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing businesses.",
    monthly: 99,
    annual: 990,
    highlight: true,
    limits: { members: "10", apps: "25", workflows: "100 (Phase 2)", ai: "Advanced", api: "250,000 calls", storage: "50 GB" },
    features: ["Everything in Starter", "Role-based permissions", "Audit logs", "Priority support"],
  },
  {
    id: "business",
    name: "Business",
    tagline: "For advanced teams.",
    monthly: 299,
    annual: 2990,
    highlight: false,
    limits: { members: "25", apps: "Unlimited", workflows: "1,000 (Phase 2)", ai: "High volume", api: "1M calls", storage: "250 GB" },
    features: ["Everything in Professional", "Multiple workspaces", "Advanced roles", "Onboarding assistance"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large organizations.",
    monthly: null,
    annual: null,
    highlight: false,
    limits: { members: "Custom", apps: "Unlimited", workflows: "Custom", ai: "Custom", api: "Custom", storage: "Custom" },
    features: ["Custom contracts", "SSO & MFA (roadmap)", "Dedicated environment", "Named support engineer"],
  },
] as const;

export const DOC_SECTIONS: {
  slug: string;
  title: string;
  summary: string;
  articles: { title: string; body: string }[];
}[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    summary: "Create an account, set up your workspace and build your first app.",
    articles: [
      { title: "Create your account", body: "Sign up with email and password, confirm your address, then complete the onboarding wizard to create your organization and first workspace." },
      { title: "Set up a workspace", body: "A workspace holds your apps, integrations, members and billing. Provide a workspace name, company name, industry, country and time zone." },
      { title: "Build your first app", body: "From the dashboard choose Create App. Start from scratch, pick a template, or describe the app you need — the request is stored on the app record for the AI builder." },
    ],
  },
  {
    slug: "platform-overview",
    title: "Platform Overview",
    summary: "How organizations, workspaces, members and modules fit together.",
    articles: [
      { title: "Hierarchy", body: "Platform → Organization → Workspace → Users. Every workspace is fully isolated: data from one workspace is never readable from another." },
      { title: "Modules", body: "Phase 1 delivers apps, the app builder foundation, the integration registry, team management, notifications, audit logs and billing records. Workflows, AI agents and analytics arrive in later phases." },
    ],
  },
  {
    slug: "apps",
    title: "Apps",
    summary: "Create, organise and configure applications.",
    articles: [
      { title: "App lifecycle", body: "Apps move through Draft, Active and Archived. Archiving keeps the record and hides it from the default list; deletion is permanent." },
      { title: "App builder", body: "Each app has pages, and each page holds components. Add components from the library, select one on the canvas and configure it in the properties panel, then save." },
    ],
  },
  {
    slug: "workflows",
    title: "Workflows",
    summary: "Planned visual automation engine.",
    articles: [{ title: "Status", body: "The workflow engine is scheduled for Phase 2. The data model and navigation are already reserved so existing apps and integrations connect without migration." }],
  },
  {
    slug: "integrations",
    title: "Integrations",
    summary: "Registry, credentials and connectivity model.",
    articles: [
      { title: "Registry", body: "Integrations are registered per workspace with a provider, display name and non-sensitive configuration such as a base URL." },
      { title: "Credentials", body: "Secrets are never stored in ordinary database columns. Credentials are held in the platform secret store and read only by server-side functions." },
    ],
  },
  {
    slug: "api",
    title: "API",
    summary: "Server-side access model.",
    articles: [{ title: "Access model", body: "All privileged operations run in server-side functions with the caller's identity verified. Workspace-scoped API key management is planned for Phase 2." }],
  },
  {
    slug: "ai",
    title: "AI",
    summary: "How AI requests are captured today.",
    articles: [{ title: "AI app requests", body: "When you describe an app, the request text is stored with the app record. Generation of pages and components from that request is a Phase 2 capability." }],
  },
  {
    slug: "security",
    title: "Security",
    summary: "Authentication, isolation and auditing.",
    articles: [
      { title: "Authentication", body: "Email and password authentication with secure sessions, plus Google sign-in. Multi-factor authentication and SSO are on the roadmap." },
      { title: "Row-level isolation", body: "Every table enforces row-level security. Access is granted only through workspace membership and role, checked in the database rather than the browser." },
      { title: "Audit logs", body: "Sign-in, app changes, membership changes and integration registration are recorded with the actor, resource and timestamp." },
    ],
  },
  {
    slug: "billing",
    title: "Billing",
    summary: "Plans, usage and limits.",
    articles: [{ title: "Current state", body: "Each workspace has a billing record holding plan, status, cycle, usage and limits. Payment processing is not connected yet; plan changes are handled by our team until the payment provider is enabled." }],
  },
];

export const APP_TEMPLATES = [
  {
    id: "crm",
    name: "CRM Starter",
    description: "Leads, clients and follow-up tracking.",
    pages: ["Leads", "Clients", "Follow-ups"],
    components: ["Heading", "Table", "Form", "Card"],
  },
  {
    id: "projects",
    name: "Project Tracker",
    description: "Projects, tasks and delivery status.",
    pages: ["Projects", "Tasks"],
    components: ["Heading", "Table", "Card", "Button"],
  },
  {
    id: "inventory",
    name: "Inventory",
    description: "Products, stock levels and movements.",
    pages: ["Products", "Movements"],
    components: ["Heading", "Table", "Form"],
  },
  {
    id: "support",
    name: "Support Desk",
    description: "Tickets and customer conversations.",
    pages: ["Tickets", "Customers"],
    components: ["Heading", "Table", "Tabs", "Card"],
  },
];

export const COMPONENT_LIBRARY = [
  "Heading",
  "Text",
  "Button",
  "Input",
  "Select",
  "Form",
  "Table",
  "Card",
  "Image",
  "Container",
  "Tabs",
  "Modal",
  "Sidebar",
  "Chart",
] as const;

export type ComponentType = (typeof COMPONENT_LIBRARY)[number];

export const INDUSTRIES = [
  "Architecture & Construction",
  "Technology",
  "Professional Services",
  "Retail & E-commerce",
  "Manufacturing",
  "Healthcare",
  "Finance",
  "Education",
  "Logistics",
  "Other",
];

export const OBJECTIVES = [
  { value: "build-app", label: "Build an app" },
  { value: "automate", label: "Automate workflows" },
  { value: "integrate", label: "Connect integrations" },
  { value: "agents", label: "Build AI agents" },
  { value: "operations", label: "Manage business operations" },
];
