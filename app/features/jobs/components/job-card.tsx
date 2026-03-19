import { Link } from 'react-router';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';

export type JobCardProps = {
  to: string;
  imageSrc: string;
  imageAlt: string;
  /** 헤더 옆에 표시되는 짧은 이름 (예: 구단명) */
  subtitle: string;
  timeAgo: string;
  title: string;
  tags: string[];
  footerLines: string[];
  actionLabel: string;
};

export function JobCard({
  to,
  imageSrc,
  imageAlt,
  subtitle,
  timeAgo,
  title,
  tags,
  footerLines,
  actionLabel,
}: JobCardProps) {
  return (
    <Link to={to}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="flex gap-4 mb-8 items-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{subtitle}</span>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col gap-1">
            {footerLines.map((line) => (
              <span
                key={line}
                className="text-sm font-medium text-muted-foreground"
              >
                {line}
              </span>
            ))}
          </div>
          <Button variant="secondary" size="sm">
            {actionLabel}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
