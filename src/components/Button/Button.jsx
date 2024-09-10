import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  type = 'button',
  variant = 'contained',
  main = false,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css[variant]]: variant,
        [css.main]: main,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;