import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';
import { Badge } from '../../../common/components/ui/badge';
import { Button } from '../../../common/components/ui/button';

export interface JobCardProps {
  to: string;
  companyLogoSrc: string;
  companyLogoAlt?: string;
  companyName: string;
  postedAgo: string;
  title: string;
  badgeLabels: string[];
  salaryRange: string;
  location: string;
  applyLabel?: string;
}

export function JobCard({
  to,
  companyLogoSrc,
  companyLogoAlt = 'Company logo',
  companyName,
  postedAgo,
  title,
  badgeLabels,
  salaryRange,
  location,
  applyLabel = 'Apply now',
}: JobCardProps) {
  return (
    <Link to={to}>
      <Card className="bg-transparent transition-colors hover:bg-card/50 h-full">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogoSrc}
              alt={companyLogoAlt}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-sm text-muted-foreground">{companyName}</span>
              <span className="text-sm text-muted-foreground">{postedAgo}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {badgeLabels.map((label, index) => (
            <Badge key={`${label}-${index}`} variant="outline">
              {label}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salaryRange}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {location}
            </span>
          </div>
          <Button variant="outline" size="sm">
            {applyLabel}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
