import { Link, type MetaFunction } from 'react-router';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Categories | make baseball' },
    { name: 'description', content: 'Browse products by category' },
  ];
};

const sampleCategories = [
  'Developer tools',
  'Design',
  'Productivity',
  'AI',
  'Open source',
  'Mobile',
] as const;

export default function CategoriesPage() {
  return (
    <div className="px-20 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Categories
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Explore products grouped by topic
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleCategories.map((name) => {
          const slug = name.toLowerCase().replace(/\s+/g, '-');
          return (
            <li key={name}>
              <Link to={`/products/categories/${slug}`}>
                <Card className="transition-colors hover:bg-primary/10">
                  <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>View products in {name}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
