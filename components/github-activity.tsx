import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getGithubData } from "@/lib/data/github";
import { ActivityCalendar } from "react-activity-calendar";

type Activity = {
  date: string;
  count: number;
  level: number;
};

const githubData = await getGithubData();
function mapToCalendarData(data: Activity) {
  return data.contributions.map((day: Activity) => ({
    date: day.date,
    count: day.count,
    level: day.level,
  }));
}

export const GithubActivity = async () => {
  console.log(githubData.totalContributions);

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
          Github Activity
        </h2>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              GitHub Activity
            </CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <ActivityCalendar
              data={githubData}
              blockSize={14}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative rounded-2xl p-px bg-linear-to-br from-emerald-500/40 via-transparent to-indigo-500/40">
        <div className="rounded-2xl bg-background p-6 transition hover:shadow-xl">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            GitHub Activity
            <span className="text-xs text-muted-foreground">
              (Last 12 months)
            </span>
          </h3>

          <div className="mt-4 overflow-x-auto">
            
          </div>
        </div>
      </div>
    </>
  );
};
