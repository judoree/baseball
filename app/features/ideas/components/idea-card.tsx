import { Link } from 'react-router';
import { Button } from '../../../common/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

type IdeaCardProps = {
  to: string;
  title: string;
  viewsText: string;
  timeAgo: string;
  likesCount: number;
  claimTo: string;
  claimLabel?: string;
  claimed?: boolean;
};

export function IdeaCard({
  to,
  title,
  viewsText,
  timeAgo,
  likesCount,
  claimTo,
  claimLabel = 'Claim idea now →',
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={to}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? 'bg-muted-foreground selection:bg-muted-foreground text-muted-foreground'
                  : ''
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="flex items-center gap-1">
          <EyeIcon className="w-4 h-4" />
          <span>{viewsText}</span>
        </div>
        <DotIcon className="w-4 h-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        0
        <Button variant="outline">
          <HeartIcon className="w-4 h-4" />
          <span>{likesCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${to}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="size-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
