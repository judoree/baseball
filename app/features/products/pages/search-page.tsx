import { Form, type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { ProductCard } from '../components/product-card';
import { cn } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'Search products | make baseball' },
    { name: 'description', content: 'Find products in the directory' },
  ];
};

const fieldClass = cn(
  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
  'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  'disabled:cursor-not-allowed disabled:opacity-50'
);

export default function SearchPage() {
  return (
    <div className="px-20 space-y-10 max-w-4xl">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Search
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Find products by name or keyword
        </p>
      </div>
      <Form method="get" className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-2">
          <label htmlFor="q" className="text-sm font-medium leading-none">
            Query
          </label>
          <input
            id="q"
            name="q"
            type="search"
            placeholder="e.g. notes, calendar, AI"
            autoComplete="off"
            className={fieldClass}
          />
        </div>
        <Button type="submit">Search</Button>
      </Form>
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/product-example"
            title="Example result"
            description="Connect this form to your search API when ready."
            commentsCount={2}
            viewsCount={50}
            votesCount={20}
          />
        ))}
      </div>
    </div>
  );
}
