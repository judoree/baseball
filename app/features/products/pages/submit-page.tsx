import { useState } from 'react';
import { Form, type MetaFunction } from 'react-router';
import { Hero } from '~/common/components/hero';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';

export const meta: MetaFunction = () => {
  return [
    { title: 'Submit a product | make baseball' },
    { name: 'description', content: 'Share a product with the community' },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero title="Form 페이지 작업중" subtitle="Form 페이지 서브 제목" />
      <Form className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-4">
          <InputPair
            label="Name"
            description="This is the name of your product"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name of your product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            required
            type="text"
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            id="url"
            name="url"
            required
            type="url"
            placeholder="https://example.com"
          />
          <InputPair
            textArea
            label="Description"
            description="A detailed description of your product"
            id="description"
            name="description"
            required
            type="text"
            placeholder="A detailed description of your product"
          />
          <SelectPair
            name="category"
            required
            placeholder="Select a category"
            label="Category"
            description="The category of your product"
            options={[
              { label: 'AI', value: 'ai' },
              { label: 'Design', value: 'design' },
              { label: 'Backend', value: 'backend' },
              { label: 'Frontend', value: 'frontend' },
            ]}
          />
          <Button className="w-full " type="submit" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <Label className="flex flex-col space-y-2 ">
            Icon {''}
            <small className="text-muted-foreground">
              This is the icon of your product
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
          />
          <div className=" flex flex-col text-xs">
            <span className="text-muted-foreground ">
              Recommended size: 128X128px
            </span>
            <span className="text-muted-foreground ">
              Allowed formats : PNG , JPEG
            </span>
            <span className="text-muted-foreground ">Max file size : 1MB</span>
          </div>
          {icon ? (
            <div className="size-40 rounded-xl shadow-xl overflow-hidden ">
              <img src={icon} className="object-cover w-full h-full" />
            </div>
          ) : null}
        </div>
      </Form>
    </div>
  );
}
