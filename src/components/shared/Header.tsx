import { Menu, Icon } from 'semantic-ui-react';
import { LocalePicker } from './LocalePicker';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Routes } from '../../constants/Routes';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { AppI18nNamespaces, TFunction } from 'react-i18next';

export const Header = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation(['common']);

  const buttons: { path: Routes; text: string; icon: SemanticICONS }[] = [
    { path: Routes.Index, text: 'common:home', icon: 'home' },
    { path: Routes.About, text: 'common:about', icon: 'question' },
  ];

  return (
    <Menu inverted={true}>
      {buttons.map((button) => (
        <Link key={button.text} href={button.path} passHref={true}>
          <Menu.Item active={pathname === button.path}>
            <Icon name={button.icon} />
            {t(button.text as any)}
          </Menu.Item>
        </Link>
      ))}
      <LocalePicker />
    </Menu>
  );
};
