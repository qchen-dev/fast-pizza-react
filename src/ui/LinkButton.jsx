import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const styles = 'text-sm text-blue-500 hover:text-blue-700 hover:underline';

  if (to === '-1') {
    return (
      <button className={styles} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}

export default LinkButton;
