import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Write a review | make baseball' },
    { name: 'description', content: 'Share your feedback about this product' },
  ];
};

export default function NewProductReviewPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Write a Review</h1>
      <p className="mt-2 text-muted-foreground">
        Review submission form is under construction.
      </p>
    </main>
  );
}
