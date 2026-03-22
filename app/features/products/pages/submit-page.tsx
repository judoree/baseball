import { Form, type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { cn } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'Submit a product | make baseball' },
    { name: 'description', content: 'Share a product with the community' },
  ];
};

const inputClass = cn(
  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
  'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  'disabled:cursor-not-allowed disabled:opacity-50'
);

const textareaClass = cn(
  'flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors',
  'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  'disabled:cursor-not-allowed disabled:opacity-50'
);

export default function SubmitPage() {
  return (
    <div className="px-20 space-y-10 max-w-2xl">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Submit a product
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Tell us about something the community should know
        </p>
      </div>
      <Form method="post" className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Product name"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="url" className="text-sm font-medium leading-none">
            URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="tagline" className="text-sm font-medium leading-none">
            Tagline
          </label>
          <input
            id="tagline"
            name="tagline"
            placeholder="One line description"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium leading-none"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="What does it do? Who is it for?"
            className={textareaClass}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
