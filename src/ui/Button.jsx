import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const baseStyle =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-3 focus:ring-yellow-300 focus:ring-offset-3 focus:outline-hidden disabled:cursor-not-allowed';

  const styles = {
    primary: baseStyle + ' px-4 py-3 md:px-6 md:py-4',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-700 focus:text-stone-700 focus:bg-stone-300 focus:ring-3 focus:ring-stone-300 focus:ring-offset-3 focus:outline-hidden disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3',
    small: baseStyle + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
