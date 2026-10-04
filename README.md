# Shafiq Ur Rehman — Portfolio

Personal portfolio of **Shafiq Ur Rehman**, a CRM Automation Specialist building sales and marketing automation on GoHighLevel, HubSpot and Zoho CRM.

- **LinkedIn:** [in/shafiq-ur-rehman-322aa7210](https://www.linkedin.com/in/shafiq-ur-rehman-322aa7210)
- **Email:** [dev.shafeeque@gmail.com](mailto:dev.shafeeque@gmail.com)

## What's inside

- **Home** — about, core CRM expertise, work experience, education, certifications, skills, key achievements, projects and contact
- **Blog** — technical write-ups from real projects, written in MDX
- Light and dark themes, responsive down to phone width

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/) · [Magic UI](https://magicui.design/) · [Motion](https://motion.dev/)
- [Content Collections](https://www.content-collections.dev/) + MDX for the blog, with [Shiki](https://shiki.style/) syntax highlighting
- [simple-icons](https://simpleicons.org/) for brand logos · [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) for the contribution chart

## Running locally

Requires Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # run ESLint
```

## Editing content

| What | Where |
| --- | --- |
| Profile, work, education, skills, projects, certifications, achievements | [`src/data/resume.tsx`](./src/data/resume.tsx) |
| Blog posts (one `.mdx` file per post) | [`content/`](./content) |
| Images, logos, project screenshots, certificate PDFs | [`public/`](./public) |

A blog post needs this frontmatter:

```mdx
---
title: "Post title"
publishedAt: "2026-09-24"
summary: "One or two sentences shown in the list and link previews."
author: "Shafiq Ur Rehman"
---
```

## Credits

Built on the open-source [portfolio template](https://github.com/dillionverma/portfolio) by Dillion Verma, licensed under the [MIT license](./LICENSE).
