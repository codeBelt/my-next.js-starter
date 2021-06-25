import { Menu, Icon } from 'semantic-ui-react';
import { LocalePicker } from './LocalePicker';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Routes } from '../../constants/Routes';

export const Header = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');

  const buttons = [
    { path: Routes.Index, text: 'home', icon: 'home' },
    { path: Routes.About, text: 'about', icon: 'question' },
  ];

  return (
    <Menu inverted={true}>
      {buttons.map((button) => (
        <Link key={button.text} href={button.path} passHref={true}>
          <Menu.Item active={pathname === button.path}>
            <Icon name={button.icon as any} />
            {t(button.text)}
          </Menu.Item>
        </Link>
      ))}
      <LocalePicker />
    </Menu>
  );
};
