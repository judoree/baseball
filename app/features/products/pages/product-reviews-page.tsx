import type { MetaFunction } from 'react-router';
import { ReviewCard } from '~/features/products/components/review-card';
import { Button } from '~/common/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Product reviews | make baseball' },
    { name: 'description', content: 'Read user reviews for this product' },
  ];
};

export default function ProductReviewsPage() {
  const reviews = [
    {
      authorName: 'Ju Hyun',
      username: '@username',
      avatarSrc: 'https://github.com/judoree.png',
      avatarFallback: 'N',
      rating: 5,
      content:
        '리뷰작성중 리뷰작성중 리뷰작성중 리뷰작성중 리뷰작성중 리뷰작성중 리뷰작성중 리뷰작성중 Create Review Create Review Create Review Create Review Create Review Create Review Create Review Create Review',
      createdAt: '10 days ago',
    },
  ];

  return (
    <div className="space-y-10 max-w-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <Button variant={'secondary'}>Write a review</Button>
      </div>
      <div className="space-y-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <ReviewCard
            username="John Doe"
            handle="@username"
            avatarUrl="https://github.com/judoree.png"
            rating={5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            postedAt="10 days ago"
          />
        ))}
      </div>
    </div>
  );
}
