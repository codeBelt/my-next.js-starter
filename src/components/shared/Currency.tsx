import { Segment, Label } from 'semantic-ui-react';
import React from 'react';
import { formatCurrency } from '../../utils/number.utils';

interface IProps {}

export const Currency: React.FC<IProps> = (props) => {
  return (
    <Segment>
      <Label content={formatCurrency(1000.234)} icon="currency outline" />
    </Segment>
  );
};

// Examples: $12.50; 12,50 €

// Examples: $12.50 CAD; 12,50 € EUR
