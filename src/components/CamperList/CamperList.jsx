import Camper from '@components/Camper/Camper';

import css from './CamperList.module.css';

const CamperList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(camper => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
