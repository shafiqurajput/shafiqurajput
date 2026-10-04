import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { fromSimpleIcon } from "@/components/ui/svgs/simple-icon";
import { monogram } from "@/components/ui/svgs/monogram";
import { GoHighLevel } from "@/components/ui/svgs/gohighlevel";
import {
  siAngular,
  siCalendly,
  siCss,
  siGoogleads,
  siGoogleanalytics,
  siHtml5,
  siHubspot,
  siJavascript,
  siMailchimp,
  siMake,
  siMeta,
  siQuickbooks,
  siSass,
  siStripe,
  siTailwindcss,
  siWordpress,
  siXero,
  siZapier,
  siZoho,
} from "simple-icons";
import {
  BarChart3,
  Bot,
  BotMessageSquare,
  BrainCircuit,
  Sparkles,
  FileSignature,
  Filter,
  GitBranch,
  Mail,
  Map,
  MessageSquare,
  Route,
  SplitSquareHorizontal,
  Target,
  Webhook,
  Workflow,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";


export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  role: string;
  href?: string;
  description: string;
  overview: string;
  impact: readonly string[];
  technologies: readonly string[];
  images: readonly ProjectImage[];
  links?: readonly { type: string; href: string; icon: ReactNode }[];
  stats?: readonly { value: string; label: string; detail: string }[];
  caseStudy?: CaseStudy;
};

export type CaseStudy = {
  pdf: string;
  problem: { intro: string; points: readonly string[] };
  approach: readonly { title: string; detail: string }[];
  build: {
    intro: string;
    paths: readonly { title: string; flow: string; points: readonly string[] }[];
    stack: readonly { name: string; role: string }[];
  };
};

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const HubSpot = fromSimpleIcon(siHubspot);
const Zoho = fromSimpleIcon(siZoho);

const phone = (src: string, alt: string): ProjectImage => ({ src, alt, width: 563, height: 1000 });

const PROJECTS: readonly Project[] = [
  {
    slug: "apf-crm-migration-gohighlevel",
    title: "APF After Party Services – CRM Migration & Sales Automation",
    role: "CRM Automation Expert · GoHighLevel",
    description:
      "Migrated APF's CRM and sales operations from ActiveCampaign to **GoHighLevel**, then built an automated Lead-to-Close workflow (lead capture, quotations, contracts, invoicing and pipeline updates) integrated with Jotform, Zapier and QuickBooks, and replaced PandaDoc with GHL's built-in contracts.",
    overview:
      "APF After Party Services ran its sales on a patchwork of tools: leads lived in **ActiveCampaign**, contracts went out through **PandaDoc**, form submissions came from **Jotform**, and invoices were handled in **QuickBooks**. Every handoff between those systems meant manual data entry, missed follow-ups and no single view of where a customer stood.\n\nI migrated APF's CRM and sales workflow into **GoHighLevel**, consolidating lead management and customer processes into one centralized system. On top of it I built an automated **Lead-to-Close** workflow that takes a customer from first enquiry to quote, signed contract and paid invoice, with the pipeline updating itself at every step.",
    impact: [
      "Migrated contacts, pipelines and customer processes from ActiveCampaign to GoHighLevel, consolidating everything into one centralized CRM.",
      "Built an automated Lead-to-Close workflow covering lead capture, quotations, contracts, invoicing and pipeline updates.",
      "Integrated GoHighLevel with Jotform, Zapier and QuickBooks so lead and customer data flows between systems automatically.",
      "Replaced PandaDoc with GoHighLevel's built-in contract functionality, simplifying the tech stack and reducing manual work.",
      "Automated notifications, follow-ups and pipeline stage updates to create a streamlined, scalable sales process.",
      "Built appointment workflows: a website booking creates or updates the deal and moves it to \"Meeting Booked\", while an email sequence sends a confirmation, alerts the team and reminds the customer 24 hours and 2 hours before.",
      "Built a reply-routing workflow that sorts every email reply into Positive, Negative, Unsubscribe, Out of Office, Later or Referral, then tags the contact, updates the opportunity, honors unsubscribes with DND and triggers the matching follow-up.",
      "Set up outcome-based follow-up workflows (Qualified, Needs Follow-up, Not Fit, No Show) so every lead gets the right next step automatically.",
    ],
    technologies: ["GoHighLevel", "ActiveCampaign", "Jotform", "Zapier", "QuickBooks", "Contracts", "Pipelines"],
    images: [
      {
        src: "/projects/apf-ghl-contacts.webp",
        alt: "GoHighLevel contacts view with tagged leads in smart lists (personal details blurred)",
        width: 2000,
        height: 758,
      },
      {
        src: "/projects/ghl-workflow-meeting-booked.webp",
        alt: "GoHighLevel workflow: a website meeting booking finds the contact, creates or updates the opportunity, moves it to Meeting Booked and sends a push notification",
        width: 900,
        height: 759,
      },
      {
        src: "/projects/ghl-workflow-appointment-emails.webp",
        alt: "GoHighLevel workflow: appointment-booked email sequence with confirmation, internal notification and reminders 24 hours and 2 hours before",
        width: 900,
        height: 754,
      },
      {
        src: "/projects/ghl-workflow-reply-routing.webp",
        alt: "GoHighLevel workflow: customer email replies are classified as Positive, Negative, Unsubscribe, Out of Office, Later or Referral, then tagged, moved in the pipeline and routed to the right follow-up",
        width: 1200,
        height: 1154,
      },
      {
        src: "/projects/ghl-workflows-list.webp",
        alt: "GoHighLevel workflows list: published automations for audit outcomes, calculator intake and result follow-ups",
        width: 1020,
        height: 530,
      },
    ],
    stats: [
      { value: "1", label: "Centralized CRM", detail: "ActiveCampaign retired; everything now lives in GoHighLevel." },
      { value: "4", label: "Tools connected or replaced", detail: "Jotform, Zapier and QuickBooks integrated; PandaDoc replaced." },
      { value: "End-to-end", label: "Lead-to-Close automation", detail: "Capture → quote → contract → invoice, hands-free." },
    ],
  },
  {
    slug: "bonnie-career-services-zoho-crm",
    title: "Bonnie Career Services – CRM & Business Automation",
    role: "CRM Automation Expert · Zoho CRM",
    description:
      "An end-to-end lead management and business automation system for Bonnie Career Services, connecting website forms, **Zoho CRM**, Zoho Bookings, Zoho Invoice and ActiveCampaign, automating lead capture, bookings, stage updates, invoicing and follow-up.",
    overview:
      "Bonnie Career Services helps clients move forward in their careers through career chats, strategy sessions and ongoing coaching. As the business grew, leads arrived from website forms, bookings lived in one tool, invoices in another and email nurturing in a third, so staff spent their time copying data and chasing follow-ups instead of serving clients.\n\nI built an end-to-end lead management and CRM automation system around **Zoho CRM**, connecting **Zoho Forms**, **Zoho Bookings**, **Zoho Invoice / Books** and **ActiveCampaign**. Now every lead is captured automatically, every booking moves the deal to the right stage, invoices go out on their own, and the team sees the whole business (pipeline, revenue and cash collected) on one live dashboard.",
    impact: [
      "Automated lead capture from website forms straight into Zoho CRM, with contacts created and updated automatically.",
      "Automated booking workflows so career chats and strategy sessions update the deal stage (booked, rescheduled, no-show or cancelled) without manual work.",
      "Automated invoice creation and sending based on customer actions and workflow stages, with payment workflows in Zoho Books that run custom functions when a payment is received.",
      "Set up automated contact notifications and follow-up processes to improve lead response times.",
      "Integrated ActiveCampaign with the CRM workflow for automated email communication and nurturing.",
      "Built a structured multi-stage pipeline and a live dashboard tracking revenue, cash collected and deals by stage for week, month, quarter and year.",
    ],
    technologies: ["Zoho CRM", "Zoho Forms", "Zoho Bookings", "Zoho Books", "Zoho Invoice", "ActiveCampaign", "Deluge"],
    images: [
      {
        src: "/projects/zoho-bonnie-dashboard.webp",
        alt: "Zoho CRM home dashboard with revenue and cash-collected KPIs, a pipeline funnel by stage, today's meetings and new deals (client details blurred)",
        width: 1670,
        height: 853,
      },
      {
        src: "/projects/zoho-bonnie-deals-pipeline.webp",
        alt: "Zoho CRM deals pipeline in kanban view with Won, Hold, Lost and Refund stages (client names blurred)",
        width: 1590,
        height: 853,
      },
      {
        src: "/projects/zoho-books-payment-workflow.webp",
        alt: "Zoho Books workflow rule that runs a custom function whenever a customer payment is received",
        width: 1920,
        height: 510,
      },
      {
        src: "/projects/zoho-forms-client-worksheet.webp",
        alt: "Zoho Forms client worksheet form with sharing and integration settings",
        width: 1840,
        height: 500,
      },
      {
        src: "/projects/zoho-bonnie-apps.webp",
        alt: "The connected Zoho One apps used across the business: Forms, Bookings, Campaigns, CRM, Books, Flow, Sign and more",
        width: 1440,
        height: 520,
      },
    ],
    stats: [
      { value: "5", label: "Systems connected", detail: "Forms, Zoho CRM, Bookings, Invoice and ActiveCampaign." },
      { value: "Auto", label: "Invoicing & payments", detail: "Invoices sent and payments recorded by workflow." },
      { value: "Live", label: "Business dashboard", detail: "Revenue, cash collected and pipeline in one view." },
    ],
  },
  {
    slug: "patriot-holding-monday-data-migration",
    title: "Patriot Holding – Data Migration & CRM Automation",
    role: "CRM Automation Expert · monday.com",
    description:
      "A real estate data migration and automation solution for Patriot Holding: custom **JavaScript** scripts and the **monday.com API** clean, transform and import large property and owner datasets into monday.com, with separate linked boards for properties and contacts plus lead-qualification automations.",
    overview:
      "Patriot Holding acquires self-storage facilities, mobile home parks and industrial property across the US. Their acquisition data, thousands of properties with owner contacts, asking prices and deal status, arrived as large, inconsistent datasets that couldn't be worked as a pipeline.\n\nI built a data migration and automation solution with **JavaScript** and the **monday.com API**. Scripts clean and standardize the raw records, split them into property and contact data, and import them into dedicated **monday.com** boards linked to each other. On top of that I set up lead qualification views and automations so the acquisitions team can organize, categorize and work every lead from one place.",
    impact: [
      "Cleaned and structured large real estate datasets so every property and owner record is accurate and consistent.",
      "Wrote custom JavaScript scripts that use the monday.com API to automate the migration, instead of importing records by hand.",
      "Separated contact and property information into dedicated boards and connected them, so each property links to its owners and each owner to their properties.",
      "Organized properties into region-based boards (e.g. Mobile Home Parks – New England, Midwest, Southeast) and asset-type workspaces for self storage, mobile home parks and industrial.",
      "Built lead qualification workflows with Fully Qualified, Partially Qualified and Pre-Qualified views, plus status pipelines from Hot Lead through LOI Sent to Under Contract.",
      "Set up automations that categorize and manage leads, including an AI step that runs a ChatGPT prompt when a property address changes and posts the result as an item update.",
    ],
    technologies: ["monday.com", "monday API", "JavaScript", "Data Migration", "Automations", "ChatGPT"],
    images: [
      { src: "/projects/monday-storage-leads.webp", alt: "monday.com Storage Leads board with deal statuses, square footage, prices and map links across acquisition workspaces", width: 1819, height: 853 },
      { src: "/projects/monday-mhp-new-england.webp", alt: "monday.com Mobile Home Parks – New England board with qualification views and linked owner data (owner details blurred)", width: 1900, height: 1053 },
      { src: "/projects/monday-chatgpt-automation.webp", alt: "monday.com automation: when Park Address changes, run a ChatGPT prompt and apply the result as an item update", width: 1420, height: 918 },
    ],
    stats: [
      { value: "2", label: "Linked data boards", detail: "Properties and contacts, connected record to record." },
      { value: "3", label: "Qualification levels", detail: "Fully, Partially and Pre-Qualified lead views." },
      { value: "API", label: "Scripted migration", detail: "JavaScript + monday.com API instead of manual imports." },
    ],
  },
  {
    slug: "hubspot-lead-nurture-scoring",
    title: "HubSpot – Advanced Lead Nurture & Scoring System",
    role: "CRM Automation Expert · Loop Brackets",
    description:
      "A data-driven nurture and scoring engine in HubSpot: 10,000+ contacts segmented, multi-stage workflows, dynamic lead scoring and automated sales tasks. Boosted MQL → SQL conversion by **28%** and made sales **40%** faster to respond.",
    overview:
      "Marketing was generating volume, but sales couldn't tell which leads were ready to talk. Hot prospects waited too long, and cold ones took up valuable time.\n\nI built a **HubSpot** nurture and scoring system that segments the database, nurtures each segment with the right message, scores every contact on fit and behavior, and hands sales-ready leads to reps with a task already waiting.",
    impact: [
      "Segmented 10,000+ contacts by lifecycle stage, behavior and fit for precisely targeted nurturing.",
      "Designed multi-stage nurture workflows that move contacts from awareness to sales-ready.",
      "Implemented dynamic lead scoring based on engagement and behavioral signals.",
      "Automated sales task creation and rep notifications the moment a lead becomes an SQL.",
      "Built custom dashboards that made campaign ROI and funnel performance visible to leadership.",
      "Set up HubSpot forms and form-based active lists that segment thousands of contacts by which form they completed and how they qualify.",
      "Designed custom deal pipelines (e.g. tutor recruitment and pharmacy sales) with stage-by-stage tasks, so every deal has a clear next step and owner.",
      "Configured contact objects, properties and owner-assignment rules, and built website analytics reports tracking sessions, sources and engagement.",
    ],
    technologies: ["HubSpot", "Workflows", "Forms", "Active Lists", "Lead Scoring", "Deal Pipelines", "Reporting"],
    images: [
      { src: "/projects/hubspot-list-form-completed.webp", alt: "HubSpot active list of 3,136 contacts built from form-submission filter groups (personal details blurred)", width: 1672, height: 1066 },
      { src: "/projects/hubspot-forms.webp", alt: "HubSpot forms with page views, conversion rates and form submissions", width: 1073, height: 953 },
      { src: "/projects/hubspot-deals-pipeline.webp", alt: "HubSpot tutor recruitment deal pipeline from New Applicant to Demo Lesson (applicant details blurred)", width: 1919, height: 951 },
      { src: "/projects/hubspot-deal-record.webp", alt: "HubSpot deal record in a pharmacy pipeline with its activity timeline of tasks (names blurred)", width: 1792, height: 997 },
      { src: "/projects/hubspot-contacts.webp", alt: "HubSpot contacts view with saved views and filters (owner names blurred)", width: 1919, height: 945 },
      { src: "/projects/hubspot-website-analytics.webp", alt: "HubSpot website analytics report: sessions by source, bounce rate, pages per session and session length", width: 1919, height: 941 },
      { src: "/projects/hubspot-object-setup.webp", alt: "HubSpot contact object setup with properties, associations and owner automation settings", width: 1919, height: 943 },
    ],
    stats: [
      { value: "+28%", label: "MQL → SQL", detail: "More marketing leads became sales-qualified." },
      { value: "10K+", label: "Contacts segmented", detail: "Clean, targeted lists for every nurture track." },
      { value: "−40%", label: "Sales response time", detail: "Reps reach hot leads while they're still hot." },
    ],
  },
  {
    slug: "liquitrack",
    title: "LiquiTrack – SaaS Inventory & Sales Platform",
    role: "Web Developer",
    description:
      "A cloud inventory and sales management platform that lets businesses track stock, sales and customer communication in one place, with module-based management, a real-time dashboard and analytics reports, built to scale with Angular.",
    overview:
      "LiquiTrack is a cloud-based SaaS platform for businesses that need one place to manage stock, sales and customer communication.\n\nI built it with a modular **Angular** architecture so new business areas can be added without reworking the core, and with real-time dashboards and reporting so owners can act on live numbers.",
    impact: [
      "Built module-based management so each business area (stock, sales, customers) stays organized and extensible.",
      "Delivered a real-time dashboard giving owners an instant view of inventory and sales.",
      "Added client communication features to keep customer conversations next to their orders.",
      "Implemented analytics reports for data-driven purchasing and sales decisions.",
      "Structured the Angular codebase to scale as the product and customer base grow.",
    ],
    technologies: ["Angular", "TypeScript", "REST APIs", "Dashboards", "Analytics"],
    images: [],
  },
  {
    slug: "geysital",
    title: "Geysital – Smart Geyser IoT App",
    role: "Software Engineer · Sync and Secure",
    description:
      "An IoT-enabled React Native app (Android & iOS) that controls a connected water heater over Bluetooth or Wi-Fi: live and target temperature, gas / electric / hybrid modes, safety alerts, scheduling and logs. Increased user engagement by **45%**.",
    overview:
      "Geysital is a smart geyser automation system that modernizes traditional water heating by giving users complete control through a mobile app. The app connects to the geyser so people can monitor, control and automate heating without standing at the appliance.\n\nI engineered the **React Native** app for Android and iOS, covering power control, live temperature, gas / electric / hybrid source selection, safety alerts, scheduling and dual connectivity over Bluetooth Low Energy and Wi-Fi.",
    impact: [
      "Engineered real-time monitoring and remote control for 20+ active users, increasing engagement by 45%.",
      "Built BLE access for nearby pairing and control, alongside Wi-Fi for remote use.",
      "Added gas, electric and hybrid heating modes with safety alerts.",
      "Implemented daily scheduling and activity logs so heating fits around the household routine.",
      "Used an offline-first architecture with push notifications and real-time data sync to boost retention.",
    ],
    technologies: ["React Native", "IoT", "Bluetooth LE", "Wi-Fi", "Push Notifications", "Offline-first"],
    images: [
      phone("/projects/geysital.webp", "Geysital control screen: full control at a glance"),
      { src: "/projects/geysital-cover.webp", alt: "Geysital case study cover: the app next to a connected geyser", width: 707, height: 1000 },
      phone("/projects/geysital-bluetooth.webp", "Geysital Bluetooth discovery: connected device"),
      phone("/projects/geysital-dashboard.webp", "Geysital dashboard: all your geysers in one place"),
      phone("/projects/geysital-setup.webp", "Geysital device setup: Wi-Fi or direct Bluetooth"),
    ],
    stats: [
      { value: "+45%", label: "User engagement", detail: "Real-time control kept users coming back." },
      { value: "3", label: "Heating modes", detail: "Gas, Electric and Hybrid, with safety alerts." },
      { value: "2", label: "Connection paths", detail: "Bluetooth for nearby pairing, Wi-Fi for remote." },
    ],
    caseStudy: {
      pdf: "/case-studies/geysital-case-study.pdf",
      problem: {
        intro:
          "Traditional geysers need manual operation and give little visibility into the heating process. Users walk to the appliance, check the water temperature by hand, and decide when to stop heating. That is inconvenient, and it can waste energy.",
        points: [
          "Manual ON/OFF at the appliance",
          "No live temperature on a phone",
          "Limited target temperature control",
          "Hard to choose Gas, Electric or Hybrid",
          "No routines around daily use",
          "Little feedback on device state",
        ],
      },
      approach: [
        { title: "Monitor", detail: "Live temperature, power, heating and connection status first." },
        { title: "Control", detail: "One-tap ON/OFF and a visible target temperature slider." },
        { title: "Configure", detail: "Gas, Electric or Hybrid, plus source priority and safe bounds." },
        { title: "Automate", detail: "Routines that heat around the day instead of every manual tap." },
      ],
      build: {
        intro:
          "Two complementary paths sit under the same app. Bluetooth is nearby and local; Wi-Fi carries the IoT path through the backend. Both meet in the firmware on the geyser.",
        paths: [
          {
            title: "Nearby · Bluetooth LE",
            flow: "App → BLE → Geysital device",
            points: ["Scan and pair", "Device name, ID and signal strength", "Open the dashboard without the backend"],
          },
          {
            title: "Connected · Wi-Fi",
            flow: "App → Backend → Device",
            points: ["Remote control from anywhere", "Real-time data sync", "Push notifications for alerts"],
          },
        ],
        stack: [
          { name: "React Native", role: "Cross-platform mobile app for Android & iOS" },
          { name: "Bluetooth LE", role: "Nearby pairing and local control" },
          { name: "Wi-Fi / IoT", role: "Remote monitoring and control" },
          { name: "Offline-first", role: "Reliable state when the connection drops" },
        ],
      },
    },
  },
];

type Certification = {
  title: string;
  icon: Icon;
  issuer: string;
  date: string;
  href?: string;
};

const CERTIFICATIONS: readonly Certification[] = [
  {
    title: "Email Marketing Certified",
    icon: HubSpot,
    issuer: "HubSpot Academy",
    date: "Oct 2026",
    href: "https://app-na2.hubspot.com/academy/achievements/11n2z26y/en/1/shafiq-ur-rehman/email-marketing-certified",
  },
  {
    title: "React Native Developer",
    icon: fromSimpleIcon(siMeta),
    issuer: "Meta",
    date: "",
  },
];

// Vercel provides the production domain at build time; fall back to localhost in dev.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const DATA = {
  name: "Shafiq Ur Rehman",
  initials: "SR",
  url: SITE_URL,
  location: "Model Town, Lahore",
  locationLink: "https://www.google.com/maps/place/Model+Town,+Lahore",
  description:
    "CRM Automation Specialist turning GoHighLevel, HubSpot and Zoho into revenue engines with automated funnels, lead nurturing and sales pipelines that convert.",
  summary:
    "I'm a CRM Automation Specialist with **4+ years** of experience architecting marketing and sales automation that drives measurable revenue. My core platforms are **GoHighLevel**, **HubSpot** and **Zoho CRM**.\n\nI turn scattered, manual processes into connected automation ecosystems: high-converting funnels, multi-channel nurture campaigns, lead scoring, guided sales pipelines and CRM integrations with tools like Stripe, Calendly, Slack, Facebook Ads and Google Ads. The results are concrete: **35% higher lead conversion**, **50% less manual sales work**, **60% faster client onboarding** and CRM migrations with **zero data loss**.\n\nI also build **AI chatbots** and **AI agents** that reply to leads instantly, answer common questions, qualify prospects and book appointments around the clock, all connected to the CRM so every conversation is tracked.\n\nI also bring a strong **web development** background (React, Next.js, Angular, React Native). That means I can build the landing pages, tracking and custom API integrations myself, so the whole system works end to end, from the first click to the final workflow step.",
  avatarUrl: "/shafiq.jpg",
  gallery: [
    {
      title: "At Work",
      photos: [
        { src: "/gallery/shafiq/desk-setup.webp", alt: "Working at a dual-monitor desk setup", width: 1000, height: 750 },
        { src: "/gallery/shafiq/office-team.webp", alt: "Selfie with a colleague at the office", width: 1000, height: 755 },
        { src: "/gallery/shafiq/office-selfie.webp", alt: "Selfie at the office", width: 562, height: 1000 },
      ],
    },
    {
      title: "Travels",
      photos: [
        { src: "/gallery/shafiq/mountain-lake.webp", alt: "Standing by a mountain lake", width: 750, height: 1000 },
        { src: "/gallery/shafiq/river-rock.webp", alt: "Sitting on a rock by a mountain river", width: 1000, height: 750 },
        { src: "/gallery/shafiq/valley-clouds.webp", alt: "In a green valley under a cloudy sky", width: 750, height: 1000 },
        { src: "/gallery/shafiq/glacier.webp", alt: "Standing on a glacier between mountain peaks", width: 946, height: 1000 },
        { src: "/gallery/shafiq/waterfall.webp", alt: "Sitting on a rock beside a waterfall", width: 812, height: 1000 },
        { src: "/gallery/shafiq/mountain-sunshine.webp", alt: "Sunshine in the mountains", width: 805, height: 1000 },
        { src: "/gallery/shafiq/wooden-cabin.webp", alt: "Outside a wooden cabin", width: 716, height: 1000 },
        { src: "/gallery/shafiq/cabin-stairs.webp", alt: "Sitting on wooden stairs", width: 994, height: 1000 },
        { src: "/gallery/shafiq/pool-evening.webp", alt: "An evening swim", width: 750, height: 1000 },
      ],
    },
    {
      title: "With Friends",
      photos: [
        { src: "/gallery/shafiq/with-friends.webp", alt: "Group photo with friends", width: 562, height: 1000 },
      ],
    },
  ],
  stats: [
    { value: "4+", label: "Years in CRM automation" },
    { value: "35%", label: "Higher lead conversion" },
    { value: "50%", label: "Less manual sales work" },
    { value: "60%", label: "Faster client onboarding" },
  ],
  expertise: [
    {
      name: "GoHighLevel",
      icon: GoHighLevel,
      tagline: "Funnels, follow-ups & booking on autopilot",
      points: [
        "Landing pages & lead-capture funnels",
        "Email, SMS & Voicemail Drop sequences",
        "Stage-triggered pipeline automation",
        "Calendar booking, reminders & Stripe payments",
      ],
    },
    {
      name: "HubSpot",
      icon: HubSpot,
      tagline: "Nurture, scoring & sales alignment",
      points: [
        "Marketing & sales workflows",
        "Lead scoring & behavioral tracking",
        "Segmentation of large contact databases",
        "Custom dashboards & ROI reporting",
      ],
    },
    {
      name: "Zoho CRM",
      icon: Zoho,
      tagline: "Guided pipelines & connected tools",
      points: [
        "Blueprint-driven sales processes",
        "Custom modules, fields & layouts",
        "Zoho Flow & Zoho Campaigns automation",
        "Integrations with finance & ops tools",
      ],
    },
  ],
  skillGroups: [
    {
      title: "CRM Platforms",
      skills: [
        { name: "GoHighLevel", icon: GoHighLevel },
        { name: "HubSpot", icon: HubSpot },
        { name: "Zoho CRM", icon: Zoho },
        { name: "Zoho Flow", icon: Zoho },
        { name: "Zoho Campaigns", icon: Zoho },
        { name: "ActiveCampaign", icon: monogram("AC", "#356AE6", "ActiveCampaign") },
        { name: "Pipedrive", icon: monogram("P", "#017737", "Pipedrive") },
        { name: "monday.com", icon: monogram("m", "#6161FF", "monday.com") },
      ],
    },
    {
      title: "Automation & Integrations",
      skills: [
        { name: "Zapier", icon: fromSimpleIcon(siZapier) },
        { name: "Make (Integromat)", icon: fromSimpleIcon(siMake) },
        { name: "Webhooks & APIs", icon: Webhook },
        { name: "Stripe", icon: fromSimpleIcon(siStripe) },
        { name: "Calendly", icon: fromSimpleIcon(siCalendly) },
        { name: "Slack", icon: MessageSquare },
        { name: "QuickBooks", icon: fromSimpleIcon(siQuickbooks) },
        { name: "Xero", icon: fromSimpleIcon(siXero) },
        { name: "PandaDoc & DocuSign", icon: FileSignature },
      ],
    },
    {
      title: "Marketing & Growth",
      skills: [
        { name: "Email & SMS Automation", icon: Mail },
        { name: "Lead Scoring & Segmentation", icon: Target },
        { name: "Pipeline Optimization", icon: GitBranch },
        { name: "Customer Journey Mapping", icon: Map },
        { name: "A/B Testing & CRO", icon: SplitSquareHorizontal },
        { name: "Campaign Analytics", icon: BarChart3 },
        { name: "Funnels", icon: Filter },
        { name: "Facebook Ads Manager", icon: fromSimpleIcon(siMeta) },
        { name: "Google Ads", icon: fromSimpleIcon(siGoogleads) },
        { name: "Google Analytics", icon: fromSimpleIcon(siGoogleanalytics) },
        { name: "Mailchimp", icon: fromSimpleIcon(siMailchimp) },
        { name: "ClickFunnels", icon: Route },
        { name: "WordPress", icon: fromSimpleIcon(siWordpress) },
      ],
    },
    {
      title: "AI Chatbots & Agents",
      skills: [
        { name: "AI Chatbots", icon: BotMessageSquare },
        { name: "AI Agents", icon: Bot },
        { name: "GoHighLevel Conversation AI", icon: GoHighLevel },
        { name: "ChatGPT / OpenAI Integrations", icon: Sparkles },
        { name: "AI Lead Qualification", icon: BrainCircuit },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: ReactLight },
        { name: "React Native", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Angular", icon: fromSimpleIcon(siAngular) },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: fromSimpleIcon(siJavascript) },
        { name: "HTML5", icon: fromSimpleIcon(siHtml5) },
        { name: "CSS3", icon: fromSimpleIcon(siCss) },
        { name: "SCSS", icon: fromSimpleIcon(siSass) },
        { name: "Tailwind CSS", icon: fromSimpleIcon(siTailwindcss) },
        { name: "API Integrations", icon: Workflow },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "dev.shafeeque@gmail.com",
    tel: "+923416678488",
    telDisplay: "+92 341 6678488",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shafiq-ur-rehman-322aa7210",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/itx_buddyz/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dev.shafeeque@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Loop Brackets Pvt Ltd",
      href: "https://www.loopbrackets.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "CRM Automation Expert",
      logoUrl: "/logos/loop-brackets.png",
      start: "Jul 2023",
      end: "Present",
      description: [
        "Design and deploy end-to-end automation workflows across GoHighLevel, HubSpot and Zoho CRM for marketing, sales and client-success teams.",
        "Build automated lead-capture systems, multi-step nurture campaigns and sales follow-up sequences across Email, SMS and Voicemail Drops.",
        "Increased lead-to-customer conversion by 35% through optimized automation strategy and journey design.",
        "Reduced manual sales tasks by 50% through automation and end-to-end process redesign.",
        "Integrate CRMs with Stripe, Facebook Ads, Google Ads, Calendly, Slack and more, so data flows between tools without manual entry.",
        "Implement lead scoring and behavioral tracking that help sales teams focus on the most valuable opportunities.",
        "Build reporting dashboards that track KPIs, campaign performance and ROI for data-driven decisions.",
      ],
    },
    {
      company: "Sync and Secure",
      href: "",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Software Engineer",
      logoUrl: "/logos/sync-and-secure.svg",
      start: "Jan 2021",
      end: "Jun 2023",
      description: [
        "Developed and maintained four cross-platform mobile apps in React Native, delivering fast, seamless experiences on Android and iOS.",
        "Engineered Geysital, an IoT smart-geyser app with real-time monitoring and remote control for 20+ active users, increasing engagement by 45%.",
        "Contributed to a web-based IoT dashboard managing 30+ connected devices, improving centralized monitoring and operational visibility.",
        "Implemented an offline-first architecture with push notifications and real-time data sync to boost reliability and retention.",
        "Improved app stability and performance through deep debugging, refactoring and native build management in Android Studio and Xcode.",
        "Upheld code quality through structured testing, peer code reviews and clean-architecture practices.",
      ],
    },
  ],
  education: [
    {
      school: "University of Okara",
      href: "https://uo.edu.pk",
      degree: "Master of Science in Computer Science",
      logoUrl: "/logos/university-of-okara.jpg",
      start: "2019",
      end: "2021",
    },
    {
      school: "University of Central Punjab",
      href: "https://ucp.edu.pk",
      degree: "Bachelor of Science in Information Technology",
      logoUrl: "/logos/ucp.png",
      start: "2017",
      end: "2019",
    },
  ],
  achievements: [
    {
      title: "60% faster client onboarding",
      description:
        "Designed a fully automated client onboarding system that cut onboarding time by 60% while improving the client experience and internal efficiency.",
    },
    {
      title: "40% more engagement",
      description:
        "Built integrated Email, SMS and Voicemail Drop campaigns that raised customer engagement by 40% and made follow-up consistent.",
    },
    {
      title: "Zero-data-loss CRM migrations",
      description:
        "Led multiple migrations across HubSpot, Zoho and GoHighLevel with full data integrity, workflow continuity and minimal downtime.",
    },
    {
      title: "35% higher lead conversion",
      description:
        "Optimized lead-capture funnels and nurture automation to turn significantly more leads into paying customers.",
    },
    {
      title: "28% more MQLs → SQLs",
      description:
        "Introduced dynamic lead scoring and segmentation in HubSpot so sales receive better-qualified leads, faster.",
    },
    {
      title: "25% shorter deal cycles",
      description:
        "Guided every deal through a proven Zoho Blueprint process with automated follow-ups and updates.",
    },
  ],
  domains: [
    "Marketing Automation",
    "Sales Pipeline Optimization",
    "CRM Migration & Integration",
    "Funnels & Landing Pages",
    "Lead Nurturing & Scoring",
  ],
  projects: PROJECTS,
  certifications: CERTIFICATIONS,
} as const;
