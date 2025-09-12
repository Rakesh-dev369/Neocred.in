import { Link } from 'react-router-dom';
import { smoothScrollTo } from '../../utils/smoothScroll';

const SmoothLink = ({ to, children, offset = 80, ...props }) => {
  const handleClick = (e) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(to.replace('#', ''), offset);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothLink;