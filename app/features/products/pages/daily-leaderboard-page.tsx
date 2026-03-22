import type { Route } from './+types/daily-leaderboard-page';
import { ProductCard } from '../components/product-card';

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Daily leaderboard ${params.year}-${params.month}-${params.day} | make baseball`,
    },
    { name: 'description', content: 'Top products for the day' },
  ];
};

export default function DailyLeaderboardPage({ params }: Route.ComponentProps) {
  const { year, month, day } = params;

  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Daily leaderboard
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          {year}-{month}-{day}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title={`Product #${index + 1}`}
            description="Placeholder entry for this period."
            commentsCount={3}
            viewsCount={80 + index}
            votesCount={40 - index}
          />
        ))}
      </div>
    </div>
  );
}
