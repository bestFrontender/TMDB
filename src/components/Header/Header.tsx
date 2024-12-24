import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

const Header: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logo}>TMDB</div>
        <div className={classes.menu}>
          <div className={classes.item}>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : '')}>
              {t('now_playing')}
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? classes.active : '')}>
              {t('upcoming')}
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/popular" className={({ isActive }) => (isActive ? classes.active : '')}>
              {t('popular')}
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/top-rated" className={({ isActive }) => (isActive ? classes.active : '')}>
              {t('top_rated')}
            </NavLink>
          </div>
        </div>
        <ul className={classes.languages}>
          <li className={cx(classes.item)} onClick={() => changeLanguage('ru')}>
            Ru
          </li>
          <li className={cx(classes.item)} onClick={() => changeLanguage('en')}>
            En
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
