import { StarIcon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';

type ReviewCardProps = {
  authorName: string;
  username: string;
  avatarSrc: string;
  avatarFallback: string;
  rating: number;
  content: string;
  createdAt: string;
};

export function ReviewCard({
  authorName,
  username,
  avatarSrc,
  avatarFallback,
  rating,
  content,
  createdAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          <AvatarImage src={avatarSrc} />
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{authorName}</h4>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{createdAt}</span>
    </div>
  );
}
