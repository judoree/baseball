import { DateTime } from 'luxon';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { Form, type MetaFunction } from 'react-router';
import { Hero } from '~/common/components/hero';
import SelectPair from '~/common/components/select-pair';
import { Button } from '~/common/components/ui/button';
import { Calendar } from '~/common/components/ui/calendar';

import { Label } from '~/common/components/ui/label';

export const meta: MetaFunction = () => {
  return [
    { title: 'Promote a product | make baseball' },
    { name: 'description', content: 'Boost visibility for your launch' },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromtionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          'days'
        ).days
      : 0;
  return (
    <div>
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibilty"
      />
      <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Selct a product"
          name="product"
          description="Select the product you want to promote"
          placeholder="Select a product"
          options={[
            {
              label: 'AI Dark Mode Maker',
              value: 'ai-dark-mode-maker',
            },
            {
              label: 'AI Dark Mode Maker',
              value: 'ai-dark-mode-maker-1',
            },
            {
              label: 'AI Dark Mode Maker',
              value: 'ai-dark-mode-maker-2',
            },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label className="flex flex-col gap-2">
            Select a range of dates for promotion{''}
            <small className="text-muted-foreground text-center ">
              Minimum duration is 3 days
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromtionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20})
        </Button>
      </Form>
    </div>
  );
}
