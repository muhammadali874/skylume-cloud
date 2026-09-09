# Skylume Cloud

SKYLUME AUTOMATION CLOUD

Phase 1 — Production SaaS Foundation

Build a completely new, production-ready SaaS web platform called:

SKYLUME AUTOMATION CLOUD

Tagline:

Build Apps. Connect Anything. Automate Everything.

This is an original platform inspired by modern products such as Apper, Integrately, Zapier, Make, n8n, Retool and AI app builders.

DO NOT clone their branding, copyrighted UI, text, logos or proprietary implementation.

The platform must have its own premium identity under:

SKYLUME MUHAMMAD™ (Private) Limited

Website/platform objective:

Create a powerful foundation for a future AI-powered application builder, workflow automation platform, integration marketplace, AI agent platform, CRM/ERP platform and SaaS ecosystem.

This prompt is ONLY for PHASE 1.

Do not attempt to implement every future feature now.

Build a strong, scalable architecture that allows Phase 2 and later phases to be added without rebuilding the application.

1. TECHNOLOGY FOUNDATION

Use the most reliable modern web architecture supported by Lovable.

Preferred stack:

React

TypeScript

Modern component architecture

Responsive design

Supabase for database/authentication where appropriate

Secure server-side functions for sensitive operations

REST/API-ready architecture

Environment variables for secrets

Modular services

Reusable components

Proper error handling

Loading states

Empty states

Toast notifications

Do not expose API keys or secrets in frontend code.

Do not hard-code credentials.

2. BRAND IDENTITY

Platform name:

SKYLUME AUTOMATION CLOUD

Company:

SKYLUME MUHAMMAD™ (Private) Limited

Design direction:

Premium

Enterprise

Futuristic

Minimal

Professional

Technology-focused

High-end SaaS

Primary visual theme:

Deep black

Dark navy

Metallic blue

Soft electric/neon blue accents

White/light typography

Use gradients and glow effects carefully.

Avoid excessive glassmorphism.

The interface should look professional enough for enterprise customers.

3. PUBLIC LANDING PAGE

Create a premium marketing homepage.

Sections:

Header

Logo:

SKYLUME AUTOMATION CLOUD

Navigation:

Platform

Features

Solutions

Integrations

Pricing

Resources

Documentation

Buttons:

Sign In

Get Started

Header should become sticky when scrolling.

HERO SECTION

Headline:

Build Apps. Connect Anything. Automate Everything.

Subheadline:

Create powerful business applications, automate workflows and connect your favorite tools — without needing to build everything from scratch.

Primary CTA:

Start Building

Secondary CTA:

Explore Platform

Hero visual:

Create a futuristic dashboard/workflow visualization showing:

Trigger → AI → Database → Integration → Notification

Do not use fake functional controls; visual elements can be illustrative.

4. PLATFORM FEATURES SECTION

Show major capabilities:

AI App Builder

Create applications using natural language.

Workflow Automation

Connect triggers, conditions and actions visually.

Integrations

Connect APIs, SaaS tools and business systems.

AI Agents

Build intelligent agents that can use tools and workflows.

Database

Create structured business data and relationships.

APIs

Build and expose secure APIs.

Analytics

Monitor applications, workflows and business activity.

Enterprise Security

Roles, permissions, authentication and audit logs.

5. USE CASES

Create cards for:

CRM

ERP

Accounting

Sales

Marketing

Customer Support

Project Management

Inventory

HR

Finance

E-commerce

Architecture & Construction

Business Automation

AI Agents

6. INTEGRATIONS PREVIEW

Create an integrations section.

Show initial integration categories:

Communication

Email

CRM

Accounting

Payments

Productivity

AI

Storage

Developer Tools

Marketing

Add example integration cards:

Telnyx

Resend

Gmail

Google Sheets

Google Drive

Google Calendar

Slack

WhatsApp

Stripe

HubSpot

Salesforce

Qwen

Groq

Custom API

At this stage these can be marketplace/connectivity placeholders unless an integration is actually implemented.

Clearly distinguish:

Available

from

Coming Soon

Do not create fake working integrations.

7. PRICING PAGE

Create a professional pricing page with:

Free

For individuals exploring the platform.

Starter

For small businesses.

Professional

For growing businesses.

Business

For advanced teams.

Enterprise

For large organizations.

Include:

Monthly/Annual toggle

Feature comparison

Usage limits

Team members

Apps

Workflows

AI usage

API usage

Storage

Do not connect real payment processing yet.

Create the billing architecture so Stripe/payment providers can be added later.

8. AUTHENTICATION

Implement real authentication.

Pages:

Sign Up

Sign In

Forgot Password

Reset Password

Email Verification

Logout

Support:

Email/password authentication

Secure sessions

Protected routes

Prepare architecture for future:

Google login

Microsoft login

MFA

SSO

Do not expose authentication secrets.

9. ONBOARDING

After signup show an onboarding wizard.

Step 1:

Welcome to SKYLUME AUTOMATION CLOUD

Step 2:

Create workspace.

Fields:

Workspace name

Company name

Industry

Country

Time zone

Step 3:

Choose primary objective:

Build an app

Automate workflows

Connect integrations

Build AI agents

Manage business operations

Step 4:

Show dashboard.

Allow users to skip onboarding.

10. WORKSPACE SYSTEM

Create multi-workspace-ready architecture.

Hierarchy:

Platform
↓
Organization
↓
Workspace
↓
Users

Each workspace must have isolated data.

Workspace switcher should be available in the main sidebar/header.

Prepare architecture for future multi-tenancy.

11. MAIN APPLICATION DASHBOARD

After login, users should enter:

Dashboard

Create a premium SaaS dashboard.

Sidebar:

Dashboard

My Apps

App Builder

Workflows

Integrations

AI Agents

Database

API

Analytics

Templates

Team

Billing

Settings

Some Phase 2 features should display:

Coming Soon

rather than pretending to be functional.

12. DASHBOARD HOME

Show:

Overview

Cards:

Total Apps

Active Workflows

Workflow Runs

Integrations

AI Agents

API Calls

For Phase 1, display realistic zero/empty states where data does not yet exist.

Do NOT generate fake business statistics.

13. QUICK ACTIONS

Create:

Create App

Create Workflow

Connect Integration

Create AI Agent

Create API

Import Data

For Phase 1:

Create App should work.

Other advanced actions can open properly designed "Coming Soon" pages/modal states.

14. MY APPS

Create an Apps management page.

Users can:

Create app

Rename app

Open app

Duplicate app

Archive app

Delete app

Search apps

Filter apps

Sort apps

App card fields:

App name

Description

Status

Owner

Created date

Updated date

Statuses:

Draft

Active

Archived

15. CREATE APP

Create a professional Create App flow.

Option 1:

Start from scratch

Option 2:

Use template

Option 3:

Describe your app with AI

For the AI option, create a prompt box:

"What would you like to build?"

Example placeholder:

"Build a CRM for my architecture company with leads, clients, projects and follow-ups."

For Phase 1:

Store the request in the database.

Create the initial app record.

Do not pretend that a full AI-generated application has been created yet.

Prepare the architecture for the Phase 2 AI App Builder.

16. APP BUILDER FOUNDATION

Create the initial App Builder interface.

Layout:

LEFT:
Component/library panel

CENTER:
Application canvas

RIGHT:
Properties panel

TOP:
App name
Preview
Save
Publish

Component library:

Text

Heading

Button

Input

Select

Form

Table

Card

Image

Container

Tabs

Modal

Sidebar

Chart

For Phase 1, implement basic component placement and configuration where practical.

The architecture must support future:

Drag/drop

Resize

Data binding

Events

Conditional visibility

Dynamic properties

Responsive settings

17. DATABASE FOUNDATION

Use Supabase/PostgreSQL where appropriate.

Create scalable database architecture.

Core tables should include:

profiles

id

user_id

full_name

avatar_url

created_at

updated_at

organizations

id

name

owner_id

created_at

updated_at

workspaces

id

organization_id

name

description

industry

country

timezone

created_at

updated_at

workspace_members

id

workspace_id

user_id

role

created_at

apps

id

workspace_id

name

slug

description

status

created_by

created_at

updated_at

app_pages

id

app_id

name

slug

configuration

sort_order

created_at

updated_at

app_components

id

page_id

component_type

configuration

position

size

sort_order

created_at

updated_at

integrations

id

workspace_id

provider

name

status

configuration

created_at

updated_at

Do not store raw secrets in normal database fields.

Sensitive credentials must use secure secret/environment mechanisms.

18. DATABASE SECURITY

Implement Row Level Security where appropriate.

Users should only access data belonging to organizations/workspaces they are authorized to access.

Create policies for:

Profiles

Organizations

Workspaces

Workspace members

Apps

Pages

Components

Integrations

Never allow one workspace to access another workspace's private data.

19. ROLES & PERMISSIONS

Create initial roles:

Owner

Admin

Manager

Member

Viewer

Permissions architecture should support:

View

Create

Edit

Delete

Manage

Publish

Billing

Do not hard-code permissions throughout the frontend.

Create a centralized permission system.

20. SETTINGS

Create Settings section.

Pages:

General

Workspace name

Company name

Industry

Time zone

Members

Invite users

Manage roles

Remove members

Security

Password/security settings

Sessions

Future MFA placeholder

Notifications

Email notifications

Workflow notifications

Security notifications

API

Prepare API key management UI.

Billing

Show current plan and usage.

21. TEAM MANAGEMENT

Create:

Invite member

Member list

Role management

Remove member

Pending invitations

Invitation system should be designed for secure implementation.

22. AUDIT LOG

Create an Audit Logs module.

Track important actions:

Login

Logout

App created

App updated

App deleted

Member invited

Role changed

Integration connected

Settings changed

Fields:

User

Action

Resource

Timestamp

IP/device metadata where appropriate

Do not store unnecessary sensitive information.

23. NOTIFICATION SYSTEM FOUNDATION

Create notification infrastructure.

Notification types:

System

Security

Workspace

Application

Integration

Workflow

Billing

Create:

Notification center

Read/unread status

Mark all read

Notification preferences

Future notification channels:

Email

SMS

WhatsApp

Push

24. GLOBAL SEARCH

Implement global search foundation.

Search across:

Apps

Workspaces

Users

Integrations

Prepare architecture for future:

Workflows

AI Agents

Calls

Emails

Documents

Database records

25. COMMAND PALETTE

Implement:

CTRL + K

Commands:

Create App

Open Apps

Open Settings

Open Integrations

Open Team

Search

Make the command system extensible.

26. RESPONSIVE DESIGN

The platform must work on:

Desktop

Laptop

Tablet

Mobile

Desktop should provide full sidebar/dashboard experience.

Mobile should use:

Responsive sidebar

Bottom navigation where appropriate

Mobile-friendly cards

Touch-friendly controls

27. DARK/LIGHT MODE

Implement:

Dark mode

Light mode

System preference

Default:

Dark mode.

Ensure contrast and accessibility.

28. ERROR HANDLING

Every important page must have:

Loading state

Empty state

Error state

Retry button

Success notification

Do not show raw technical errors to normal users.

Provide user-friendly messages.

29. SECURITY REQUIREMENTS

Follow secure development practices.

Never:

expose API keys

expose service-role keys

put secrets in client-side code

store passwords manually

bypass authentication

bypass workspace permissions

trust client-side authorization alone

Use server-side validation where required.

30. PERFORMANCE

Implement:

Lazy loading

Pagination

Efficient queries

Debounced search

Optimistic UI where safe

Proper caching where appropriate

Do not load entire database tables unnecessarily.

31. SEO

Public website must include:

Proper title

Meta description

Open Graph metadata

Favicon

Semantic HTML

SEO-friendly URLs

Sitemap-ready structure

Do not index private dashboard pages.

32. DOCUMENTATION FOUNDATION

Create public documentation structure:

Getting Started

Platform Overview

Apps

Workflows

Integrations

API

AI

Security

Billing

For Phase 1, create the documentation layout and navigation.

33. DEVELOPER ARCHITECTURE

Create modular service structure for future:

/auth
/organizations
/workspaces
/apps
/app-builder
/workflows
/integrations
/agents
/knowledge
/apis
/communications
/crm
/erp
/analytics
/billing
/marketplace

Do not implement all modules now.

Create clean boundaries so future phases can be added without major rewrites.

34. FUTURE SKYLUME INTEGRATIONS

The architecture must be prepared for these future integrations:

Telnyx

Resend

Qwen

Groq

WhatsApp

Gmail

Google Sheets

Google Drive

Google Calendar

Slack

Stripe

HubSpot

Salesforce

Custom REST APIs

Custom Webhooks

Do NOT require these integrations to be fully implemented in Phase 1.

35. EXISTING SKYLUME SYSTEM COMPATIBILITY

This is important.

I already have an existing Skylume system involving:

Telnyx Voice Agent

Telnyx call recordings

Telnyx webhooks

Qwen AI

Resend email

CRM

ERP

Communication Timeline

Do not create architecture that prevents these systems from being integrated later.

The new platform must be able to connect to these services through secure APIs and server-side functions.

36. BILLING FOUNDATION

Create billing architecture but do not process real payments yet.

Store:

Plan

Subscription status

Billing cycle

Usage

Limits

Prepare for future Stripe integration.

37. ADMIN FOUNDATION

Create an internal admin area architecture.

Future admin capabilities:

Users

Organizations

Workspaces

Apps

Integrations

System health

Usage

Billing

Audit logs

For Phase 1, create only the basic protected admin structure.

38. UI QUALITY REQUIREMENTS

Do not build a generic template.

The interface must feel custom-designed.

Use:

Consistent spacing

Professional typography

Subtle animations

Smooth hover states

Clean cards

Modern tables

Elegant modals

Clear navigation

Strong visual hierarchy

Avoid:

excessive gradients

oversized text everywhere

unnecessary animations

clutter

fake statistics

fake integrations

fake functionality

39. NO FAKE FUNCTIONALITY

This is a critical requirement.

Do not create buttons that appear functional but do nothing.

If a feature is not implemented in Phase 1:

Show:

Coming Soon

or

Phase 2

with a clear explanation.

Every Phase 1 feature that is presented as functional must actually work.

40. DEVELOPMENT PROCESS

Before implementation:

Analyze the requirements.

Design the database schema.

Design authentication.

Design workspace/organization architecture.

Design routing.

Design component architecture.

Design security policies.

Design future extensibility.

Then implement Phase 1.

After implementation:

Run lint

Run TypeScript validation

Test authentication

Test signup

Test login

Test workspace creation

Test app creation

Test app editing

Test permissions

Test database security

Test responsive UI

Test dark/light mode

Test navigation

Test search

Test command palette

Fix all errors found.

41. PHASE 1 DEFINITION OF DONE

Phase 1 is complete only when the following work:

PUBLIC:

✓ Landing page
✓ Features
✓ Solutions
✓ Integrations preview
✓ Pricing
✓ Documentation structure
✓ Sign In
✓ Sign Up

APPLICATION:

✓ Authentication
✓ User profile
✓ Organization
✓ Workspace
✓ Workspace members
✓ Roles
✓ Permissions
✓ Dashboard
✓ My Apps
✓ Create App
✓ App Builder foundation
✓ Database foundation
✓ Integrations foundation
✓ Settings
✓ Team management
✓ Notifications
✓ Audit logs
✓ Global search
✓ Command palette
✓ Dark/light mode
✓ Responsive design

SECURITY:

✓ Protected routes
✓ RLS/security policies
✓ Workspace isolation
✓ Secure environment variables
✓ No exposed secrets

QUALITY:

✓ No obvious TypeScript errors
✓ No lint errors
✓ No broken navigation
✓ No fake functional controls
✓ Proper loading/error/empty states
✓ Mobile responsive

42. IMPORTANT — DO NOT BUILD PHASE 2 YET

Do NOT fully implement:

Visual workflow automation engine

AI workflow generation

AI agents

Multi-agent system

Voice AI

WhatsApp AI

Advanced CRM

ERP

Marketplace

White-label

Advanced billing

Massive integration library

Prepare the architecture for these features, but implement them in future phases.

43. FINAL OUTPUT

After building Phase 1, provide a concise technical report containing:

Pages created

Components created

Database tables

Authentication implementation

RLS/security policies

Workspace architecture

App Builder status

API architecture

Environment variables required

Known limitations

Recommended Phase 2 implementation order

Most importantly:

Do not destroy, overwrite, or replace working functionality if this project already contains existing components.

Inspect the existing project first and preserve anything useful.

Build SKYLUME AUTOMATION CLOUD as a real production SaaS foundation, not a static mockup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2a0332e5-fccf-4f6a-a0f3-e616c2d72321).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
