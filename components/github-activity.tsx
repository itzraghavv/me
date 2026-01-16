import { getGithubData } from "@/lib/data/github";
import { ActivityCalendar, ThemeInput } from "react-activity-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const explicitTheme: ThemeInput = {
  light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
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
      <div className="relative rounded-2xl p-px bg-linear-to-br from-emerald-500/40 via-transparent to-indigo-500/40">
        <div className="rounded-2xl bg-background p-6 transition hover:shadow-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            GitHub Activity
            <span className="text-xs text-muted-foreground">
              (Last 12 months)
            </span>
          </h3>

          <div className="mt-4 overflow-x-auto">
            <TooltipProvider delayDuration={150}>
              <ActivityCalendar
                data={activityData}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                weekStart={1}
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
    </>
  );
};
