import { Link } from 'react-router';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';
import { Badge } from '../../../common/components/ui/badge';
import { Button } from '../../../common/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../common/components/ui/avatar';

export interface TeamCardProps {
  to: string;
  username: string;
  avatarSrc: string;
  avatarFallback: string;
  /** Text after the user badge, before role badges (e.g. "is looking for") */
  introText: string;
  /** Role titles shown as default badges */
  roleLabels: string[];
  /** Text after role badges (e.g. " to build") */
  buildLeadIn: string;
  /** Short project description */
  projectDescription: string;
  joinCtaLabel?: string;
}

export function TeamCard({
  to,
  username,
  avatarSrc,
  avatarFallback,
  introText,
  roleLabels,
  buildLeadIn,
  projectDescription,
  joinCtaLabel = 'Join team →',
}: TeamCardProps) {
  return (
    <Link to={to}>
      <Card className="bg-transparent transition-colors hover:bg-card/50 h-full">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose flex flex-wrap items-center gap-x-1 gap-y-2">
            <Badge
              variant="secondary"
              className="inline-flex items-center text-base shadow-sm"
            >
              <span>{username}</span>
              <Avatar className="size-5">
                <AvatarFallback>{avatarFallback}</AvatarFallback>
                <AvatarImage src={avatarSrc} />
              </Avatar>
            </Badge>
            <span>{introText}</span>
            {roleLabels.map((label, index) => (
              <Badge key={`${label}-${index}`} className="text-base">
                {label}
              </Badge>
            ))}
            <span>{buildLeadIn}</span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">{joinCtaLabel}</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
