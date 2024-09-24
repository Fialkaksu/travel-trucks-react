import { PacmanLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <PacmanLoader color="#ffc531" />
    </div>
  );
};

export default Loader;
