import { Link, type MetaFunction } from 'react-router';
import { Button } from '../components/ui/button';
import { ProductCard } from '../../features/products/components/product-card';
import { PostCard } from '../../features/community/components/post-card';
import { IdeaCard } from '../../features/ideas/components/idea-card';
import { JobCard } from '../../features/jobs/components/job-card';
import { TeamCard } from '../../features/teams/components/team-card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | make baseball' },
    { name: 'description', content: 'Welcome to baseball' },
  ];
};

export const loader = () => {
  console.log('Hello');
  return {
    hello: 'world',
  };
};

export default function Homepage({ LoaderData }) {
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
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
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
            Lastest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find jobs for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            to="/jobs/jobId"
            companyLogoSrc="https://github.com/facebook.png"
            companyLogoAlt="Facebook company logo"
            companyName="Facebook"
            postedAgo="12 hours ago"
            title="Software Engineer"
            badgeLabels={['Full time', 'Remote']}
            salaryRange="$100,100 - $ 150,000"
            location="Korea"
            applyLabel="Apply now"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className=" text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            to="/teams/teamId"
            username="judoree"
            avatarSrc="https://github.com/judoree.png"
            avatarFallback="N"
            introText="is looking fo"
            roleLabels={[
              'React Developer',
              'Backend Developer',
              'product Manager',
            ]}
            buildLeadIn=" to build"
            projectDescription=" a new social media platform"
            joinCtaLabel="Joun team &rarr;"
          />
        ))}
      </div>
    </div>
  );
}
