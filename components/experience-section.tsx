import { Experience } from "@/lib/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
          Experience
        </h2>

        <div className="mt-8 space-y-6">
          {Experience.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="rounded-lg border p-5 transition hover:border-muted-foreground/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-medium">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs rounded-md border px-2 py-1 text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
