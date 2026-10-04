import { Check } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ExpertiseSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Core Expertise</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
            GoHighLevel · HubSpot · Zoho
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Three platforms I know inside out, and automate end to end.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DATA.stats.map((stat) => (
          <div key={stat.label} className="border rounded-xl p-4 flex flex-col gap-1 text-center">
            <span className="text-2xl font-bold tracking-tight tabular-nums sm:text-3xl">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {DATA.expertise.map((platform) => (
          <div key={platform.name} className="border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-10 p-2 border rounded-full shadow ring-2 ring-border bg-white flex-none flex items-center justify-center">
                <platform.icon className="size-full" aria-hidden />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="font-semibold leading-tight">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.tagline}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-1.5">
              {platform.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 mt-0.5 text-foreground" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
