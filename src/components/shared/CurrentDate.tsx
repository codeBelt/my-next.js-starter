import { Segment, Label } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import React from 'react';

interface IProps {}

export const CurrentDate: React.FC<IProps> = (props) => {
  const router = useRouter();

  const dateTime = DateTime.local()
    .setLocale(router.locale!)
    .setZone('utc')
    .toLocaleString({
      ...DateTime.DATETIME_HUGE,
      timeZoneName: 'short',
    });

  return (
    <Segment>
      <Label content={dateTime} icon="clock outline" />
    </Segment>
  );
};

// Thursday, October 15, 2015
// October 15, 2015
// Oct 15, 2015

/*
https://www.shopify.com/partners/blog/liquid-date-format
{{ article.published_at | date: format: 'default' }}
<-- Tue, Apr 30, 2019, 6:55 am -0400 -->

{{ article.published_at | date: format: 'short' }}
<-- 30 Apr 06:55 -->

{{ article.published_at | date: format: 'long' }}
<-- April 30, 2019 06:55 -->
*/
