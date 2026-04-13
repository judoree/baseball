import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Product reviews | make baseball' },
    { name: 'description', content: 'Read user reviews for this product' },
  ];
};

export default function ProductReviewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Product Reviews</h1>
      <p className="mt-2 text-muted-foreground">
        Reviews page is under construction.
      </p>
    </main>
  );
}
