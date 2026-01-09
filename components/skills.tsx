import { SKILLS } from "@/lib/data/skills";
import SkillPill from "./skill-pill";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
          Skills & Tools
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
