import clsx from 'clsx';

import css from './Icon.module.css';

const Icon = ({ name, className = '' }) => (
  <svg className={clsx(css.icon, css[className])}>
    <use xlinkHref={`/icons.svg#${name}`} />
  </svg>
);

export default Icon;
