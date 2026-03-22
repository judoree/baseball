import type { Route } from './+types/weekly-leaderboard-page';
import { ProductCard } from '../components/product-card';

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Weekly leaderboard ${params.year} W${params.week} | make baseball`,
    },
    { name: 'description', content: 'Top products for the week' },
  ];
};

export default function WeeklyLeaderboardPage({
  params,
}: Route.ComponentProps) {
  const { year, week } = params;

  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Weekly leaderboard
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          {year} · week {week}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title={`Product #${index + 1}`}
            description="Placeholder entry for this period."
            commentsCount={6}
            viewsCount={120 + index}
            votesCount={55 - index}
          />
        ))}
      </div>
    </div>
  );
}
