import { Link, type MetaFunction } from 'react-router';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Leaderboards | make baseball' },
    { name: 'description', content: 'Top products by period' },
  ];
};

const periods = [
  {
    title: 'Yearly',
    description: 'Best products of a full calendar year',
    to: '/products/leaderboards/yearly/2025',
  },
  {
    title: 'Monthly',
    description: 'Standouts for a specific month',
    to: '/products/leaderboards/monthly/2025/3',
  },
  {
    title: 'Weekly',
    description: 'Top products for an ISO week',
    to: '/products/leaderboards/weekly/2025/12',
  },
  {
    title: 'Daily',
    description: 'Daily winners',
    to: '/products/leaderboards/daily/2025/3/22',
  },
] as const;

export default function LeaderboardPage() {
  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Leaderboards
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Choose a period to see top products
        </p>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {periods.map((period) => (
          <li key={period.title}>
            <Link to={period.to}>
              <Card className="transition-colors hover:bg-primary/10">
                <CardHeader>
                  <CardTitle>{period.title}</CardTitle>
                  <CardDescription>{period.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
