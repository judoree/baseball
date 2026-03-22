import type { Route } from './+types/yearly-leaderboard-page';
import { ProductCard } from '../components/product-card';

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Yearly leaderboard ${params.year} | make baseball` },
    { name: 'description', content: 'Top products for the year' },
  ];
};

export default function YearlyLeaderboardPage({ params }: Route.ComponentProps) {
  const { year } = params;

  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Yearly leaderboard
        </h1>
        <p className="text-xl font-light text-muted-foreground">{year}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title={`Product #${index + 1}`}
            description="Placeholder entry for this period."
            commentsCount={8}
            viewsCount={200 + index}
            votesCount={90 - index}
          />
        ))}
      </div>
    </div>
  );
}
