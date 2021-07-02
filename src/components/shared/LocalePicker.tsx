import { Menu, Flag, FlagNameValues } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface IProps {}

export const LocalePicker: React.FC<IProps> = (props) => {
  const router = useRouter();

  return (
    <Menu.Menu position="right">
      {router.locales!.map((locale) => (
        <Link key={locale} href={router.asPath} locale={locale} passHref={true}>
          <Menu.Item active={locale === router.locale} key={locale}>
            <Flag name={(locale === 'en' ? 'us' : locale) as FlagNameValues} />
            {` ${locale.toUpperCase()}`}
          </Menu.Item>
        </Link>
      ))}
    </Menu.Menu>
  );
};
