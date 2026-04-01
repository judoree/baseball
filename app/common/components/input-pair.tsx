import type { InputHTMLAttributes } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export default function InputPair({
  label,
  description,
  textArea,
  ...rest
}: {
  label: string;
  description: string;
  textArea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="space-y-2 flex flex-col items-start">
      <Label htmlFor={rest.id} className="flex flex-col gpa-2 items-start">
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>

      {textArea ? (
        <Textarea rows={8} className="resize-none" {...rest} />
      ) : (
        <Input {...rest} />
      )}
    </div>
  );
}
