import React, { useState } from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { UiSelect } from '../../ui/ui-select/UiSelect';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  const [controlledValue, setControlledValue] = useState<string>('3');

  return (
    <div>
      <h1>
        Hello Next.js{' '}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </h1>
      <div>
        <UiSelect
          id="uncontrolled"
          onChange={(value) => console.log(value, typeof value)}
          initialValue="2"
          options={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
            { label: 'Four', value: '4' },
          ]}
        />
        <UiSelect
          id="controlled"
          onChange={(value) => setControlledValue(value)}
          value={controlledValue}
          options={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
            { label: 'Four', value: '4' },
          ]}
        />
      </div>
      <p>
        <Link href={Routes.About}>
          <a>About</a>
        </Link>
      </p>
    </div>
  );
};
