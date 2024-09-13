import { Link } from 'react-router-dom';

import CamperHeader from '@components/CamperHeader/CamperHeader';
import EquipmentList from '@components/EquipmentList/EquipmentList';
import Button from '@components/Button/Button';

import { getFilteredEquipment } from '@utils/utils';

import css from './Camper.module.css';

const Camper = ({ camper }) => {
  const { id, name, description, gallery = [] } = camper;

  const equipment = getFilteredEquipment({ ...camper });

  return (
    <div className={css.camperCard}>
      <img src={gallery[0].thumb} alt={name} className={css.camperImage} />

      <div className={css.camperDetails}>
        <CamperHeader camper={camper} />

        <p className={css.camperDescription}>{description}</p>

        <EquipmentList equipment={equipment} />

        <Button aria-label="Show More">
          <Link to={`/catalog/${id}/features`} className={css.link}>
            Show More
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Camper;
