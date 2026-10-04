import { DATA } from "@/data/resume";

export default function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Key Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I bring</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Measurable results from CRM automation projects delivered for real businesses.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {DATA.achievements.map((achievement) => (
            <div key={achievement.title} className="border rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-semibold leading-tight">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {DATA.domains.map((domain) => (
            <span key={domain} className="border rounded-xl px-3 py-1 text-sm text-muted-foreground">
              {domain}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
