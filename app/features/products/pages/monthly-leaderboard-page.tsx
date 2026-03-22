import type { Route } from './+types/monthly-leaderboard-page';
import { ProductCard } from '../components/product-card';

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Monthly leaderboard ${params.year}-${params.month} | make baseball`,
    },
    { name: 'description', content: 'Top products for the month' },
  ];
};

export default function MonthlyLeaderboardPage({
  params,
}: Route.ComponentProps) {
  const { year, month } = params;

  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Monthly leaderboard
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          {year} / {month}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title={`Product #${index + 1}`}
            description="Placeholder entry for this period."
            commentsCount={5}
            viewsCount={150 + index}
            votesCount={70 - index}
          />
        ))}
      </div>
    </div>
  );
}
