import { Badge } from "@/components/ui/badge";
import { Skill } from "@/lib/data/skills";

type Props = {
  skill: Skill;
};

export default function SkillPill({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <Badge
      variant="outline"
      className="
        flex items-center gap-2
        px-3 py-1.5
        rounded-md
        text-sm
        font-normal
        bg-muted/40
        hover:bg-muted/70
        transition-colors
      "
    >
      <Icon className="size-4" />
      {skill.name}
    </Badge>
  );
}
