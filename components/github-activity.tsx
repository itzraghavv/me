import { getGithubData } from "@/lib/data/github";
import { ActivityCalendar, ThemeInput } from "react-activity-calendar";
import { TooltipProvider } from "@/components/ui/tooltip";

type ActivityData = {
  date: string;
  count: number;
  level: number;
};

type GithubContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

type GithubApiResponse = {
  contributions: GithubContributionDay[][];
  totalContribution: number;
};

const githubData: GithubApiResponse = await getGithubData();

const levelMap = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function mapGithubToActivityData(apiData: GithubApiResponse): ActivityData[] {
  return apiData.contributions.flat().map((day) => ({
    date: day.date,
    count: day.contributionCount,
    level: levelMap[day.contributionLevel],
  }));
}

const theme: ThemeInput = {
  light: ["#F8FAFC", "#E2E8F0", "#22C55E", "#16A34A", "#0F172A"],
  dark: ["#020617", "#0F172A", "#064E3B", "#047857", "#22C55E"],
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const activityData = mapGithubToActivityData(githubData);

export const GithubActivity = async () => {
  return (
    <>
      <section className="py-16">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
          Github Activity
        </h2>
        <div className="relative rounded-2xl p-px bg-linear-to-br from-emerald-500/40 via-transparent to-indigo-500/40  my-4">
          <div className="rounded-2xl bg-background p-6 transition hover:shadow-xl">
            <div className="mt-4">
              <TooltipProvider delayDuration={150}>
                <ActivityCalendar
                  data={activityData}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  weekStart={1}
                  // theme={theme}
                  // renderBlock={(block, activity) => (
                  //     <Tooltip>
                  //       <TooltipTrigger asChild>{block}</TooltipTrigger>
                  //       <TooltipContent side="top" align="center">
                  //         <div className="text-sm">
                  //           <div className="font-medium">
                  //             {activity.count} contributions
                  //           </div>
                  //           <div className="text-muted-foreground">
                  //             {formatDate(activity.date)}
                  //           </div>
                  //         </div>
                  //       </TooltipContent>
                  //     </Tooltip>
                  //   )}
                  // theme={explicitTheme}
                  // loading
                />
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
