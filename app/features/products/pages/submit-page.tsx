import { Form, type MetaFunction } from 'react-router';
import { Hero } from '~/common/components/hero';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';

export const meta: MetaFunction = () => {
  return [
    { title: 'Submit a product | make baseball' },
    { name: 'description', content: 'Share a product with the community' },
  ];
};

export default function SubmitPage() {
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
        </div>
      </Form>
    </div>
  );
}
