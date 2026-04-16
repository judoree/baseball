import type { MetaFunction } from 'react-router';
import { IdeaCard } from '../components/idea-card';
import type { Route } from './+types/ideas-page';
import { Hero } from '~/common/components/hero';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Ideas | make baseball' },
    { name: 'description', content: 'Discover community ideas to build' },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-20">
      <Hero title="IdeasGPT" subtitle="Find ideas for your next project" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            to={`ideaId-${index}`}
            key={`ideaId-${index}`}
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
    </div>
  );
}
