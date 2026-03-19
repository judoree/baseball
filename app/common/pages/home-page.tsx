import { Link, type MetaFunction } from 'react-router';
import { Button } from '../components/ui/button';
import { ProductCard } from '../../features/products/components/product-card';
import { PostCard } from '../../features/community/components/post-card';
import { IdeaCard } from '../../features/ideas/components/idea-card';
import { JobCard } from '../../features/jobs/components/job-card';
import image from 'image/팀로고.png';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | make baseball' },
    { name: 'description', content: 'Welcome to baseball' },
  ];
};

export default function Homepage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className=" text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to={'/products/leaderbords'}>
              Explore all products &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className=" text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest Discussions from by our community today
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all Discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={index}
            to="/community/postId"
            avatarFallback="N"
            avatarSrc="https://github.com/apple.png"
            title="What is the best productivity tool?"
            username="judoree"
            category="Productivity"
            timeAgo="12 hours ago"
            replyLabel="Reply →"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className=" text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            to="/ideas/ideaId"
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewsText="123 조회수"
            timeAgo="12 hours ago"
            likesCount={12}
            claimTo="/ideas/ideaId/claim"
            claimLabel="Claim idea now →"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className=" text-5xl font-bold leading-tight tracking-tight">
            KBO 구단
          </h2>
          <p className="text-xl font-light text-foreground">kbo 구단 상세</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">각 구단 Domain &rarr;</Link>
          </Button>
          {Array.from({ length: 10 }).map((_, index) => (
            <JobCard
              to="/jobs/jobId"
              imageSrc={image}
              imageAlt="kbo"
              subtitle="KT wiz"
              timeAgo="6 hours ago"
              title="Suwon KT wiz"
              tags={['수원', '케이티위즈']}
              footerLines={[
                '창단 첫 한국시리즈 우승 : 2021년',
                'Play for the WIN',
              ]}
              actionLabel="Apply now"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
