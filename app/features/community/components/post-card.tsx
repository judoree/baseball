import { Link } from 'react-router';
import { Button } from '../../../common/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../common/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../common/components/ui/avatar';

type PostCardProps = {
  to: string;
  avatarSrc?: string;
  avatarFallback: string;
  title: string;
  username: string;
  category: string;
  timeAgo: string;
  replyLabel?: string;
};

export function PostCard({
  to,
  avatarSrc,
  avatarFallback,
  title,
  username,
  category,
  timeAgo,
  replyLabel = 'Reply →',
}: PostCardProps) {
  return (
    <Link to={to}>
      <Card className="bg-transparent hover:bg-card/50 transiton-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{avatarFallback}</AvatarFallback>
            {avatarSrc ? <AvatarImage src={avatarSrc} /> : null}
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-semibold leading-non trackiong-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{username}</span>
              <span>{category}</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">{replyLabel}</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

