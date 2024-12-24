import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation();

  return <div className={classes.wrapper}>{t('footer')}</div>;
};

export default Footer;
