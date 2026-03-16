import { Link } from 'react-router';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';
import { ChevronsUpIcon, EyeIcon, MessageCircleIcon } from 'lucide-react';
import { Button } from '../../../common/components/ui/button';

type ProductCardProps = {
  to: string;
  title: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
};

export function ProductCard({
  to,
  title,
  description,
  commentsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={to}>
      <Card className="w-full flex flex-row items-center justify-between bg-transparent hover:bg-primary/10">
        <CardHeader className="w-[-webkit-fill-available]">
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className=" flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentsCount}</span>
            </div>
            <div className=" flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-18">
            <ChevronsUpIcon className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

