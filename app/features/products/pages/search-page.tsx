import { Form, type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { ProductCard } from '../components/product-card';
import type { Route } from './+types/search-page';
import z from 'zod';
import { Hero } from '~/common/components/hero';
import ProductPagination from '~/common/components/product-pagination';
import { Input } from '~/common/components/ui/input';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Search products | make baseball' },
    { name: 'description', content: 'Find products in the directory' },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(''),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error('Invalid parmas');
  }
}

export default function SearchPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Serach Page"
        subtitle="Search for product by title or description"
      />
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto gap-2">
        <Input name="query" placeholder="여기에 검색해라" className="text-lg" />
        <Button>Serach</Button>
      </Form>
      <div className="space-y-5 w-full max-w-3xl mx-auto ">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            to="/products/productId"
            title="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
