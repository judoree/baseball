import { Link } from 'react-router';
import type { Route } from './+types/category-page';
import { Button } from '~/common/components/ui/button';
import { ProductCard } from '../components/product-card';

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Category: ${params.category} | make baseball` },
    { name: 'description', content: 'Products in this category' },
  ];
};

export default function CategoryPage({ params }: Route.ComponentProps) {
  const { category } = params;
  const label = decodeURIComponent(category).replace(/-/g, ' ');

  return (
    <div className="px-20 space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-5xl font-bold capitalize leading-tight tracking-tight">
            {label}
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Products tagged in this category
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/products/categories">All categories</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title={`${label} product #${index + 1}`}
            description="Placeholder listing for this category."
            commentsCount={4}
            viewsCount={100 + index}
            votesCount={30 + index}
          />
        ))}
      </div>
    </div>
  );
}
