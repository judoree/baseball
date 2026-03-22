import { Link, type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { ProductCard } from '../components/product-card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Products | make baseball' },
    { name: 'description', content: 'Discover products from the community' },
  ];
};

export default function ProductsPage() {
  return (
    <div className="px-20 space-y-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Products
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          The best products made by our community
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="outline" asChild>
            <Link to="/products/leaderboards">Leaderboards</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products/categories">Categories</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products/search">Search</Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title="Product Name"
            description="Short description of what this product does."
            commentsCount={12}
            viewsCount={340}
            votesCount={120}
          />
        ))}
      </div>
    </div>
  );
}
