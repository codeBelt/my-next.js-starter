import { Segment, Label } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';

export const CurrentDate = ({}) => {
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
