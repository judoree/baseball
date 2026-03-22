import { Link, type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Promote a product | make baseball' },
    { name: 'description', content: 'Boost visibility for your launch' },
  ];
};

export default function PromotePage() {
  return (
    <div className="px-20 space-y-10 max-w-3xl">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Promote
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Get extra reach during your launch window
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Featured placement</CardTitle>
          <CardDescription>
            This is a placeholder for your promotion tiers and checkout flow.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/products/submit">Submit a product first</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products">Browse products</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
