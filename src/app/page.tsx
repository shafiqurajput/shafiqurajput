/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import AchievementsSection from "@/components/section/achievements-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import ExpertiseSection from "@/components/section/expertise-section";
import GallerySection from "@/components/section/gallery-section";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

const BLUR_FADE_DELAY = 0.04;

const CONTACT_LINKS = [
  { label: DATA.contact.email, href: `mailto:${DATA.contact.email}`, icon: Mail, external: false },
  { label: DATA.contact.telDisplay, href: `tel:${DATA.contact.tel}`, icon: Phone, external: false },
  { label: DATA.location, href: DATA.locationLink, icon: MapPin, external: true },
  { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url, icon: DATA.contact.social.LinkedIn.icon, external: true },
  { label: "Instagram", href: DATA.contact.social.Instagram.url, icon: DATA.contact.social.Instagram.icon, external: true },
];

function CertificationLink({ href, children }: { href?: string; children: ReactNode }) {
  const className = "flex items-center gap-x-3 justify-between group";
  if (!href) return <div className={className}>{children}</div>;
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {CONTACT_LINKS.map(({ label, href, icon: Icon, external }) => (
                    <li key={href}>
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="inline-flex h-8 items-center gap-2 rounded-xl border border-border bg-background px-3 text-sm text-muted-foreground ring-2 ring-border/20 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Icon className="size-4 shrink-0" aria-hidden />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="expertise">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <ExpertiseSection />
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.degree}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-white"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Courses &amp; Certifications</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.certifications.map((cert, index) => (
              <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 9 + index * 0.05}>
                <CertificationLink href={cert.href}>
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="size-8 md:size-10 p-2 border rounded-full shadow ring-2 ring-border bg-white flex-none flex items-center justify-center">
                      <cert.icon className="size-full text-neutral-700" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {cert.title}
                        {cert.href && (
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        )}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {cert.date}
                  </div>
                </CertificationLink>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-5">
            {DATA.skillGroups.map((group, groupIndex) => (
              <div key={group.title} className="flex flex-col gap-2">
                <BlurFade delay={BLUR_FADE_DELAY * 10 + groupIndex * 0.05}>
                  <h3 className="text-sm font-semibold text-muted-foreground">{group.title}</h3>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, id) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + groupIndex * 0.05 + id * 0.02}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="achievements">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <AchievementsSection />
        </BlurFade>
      </section>
      {DATA.projects.length > 0 && (
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <ProjectsSection />
          </BlurFade>
        </section>
      )}
      <section id="gallery">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <GallerySection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
