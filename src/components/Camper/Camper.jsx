import { Link } from 'react-router-dom';

import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';

import css from './Camper.module.css';

const Camper = ({ camper }) => {
  const {
    id,
    name,
    rating,
    location,
    price,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    gallery,
    reviews,
  } = camper;

  const equipment = [
    {
      icon: 'icon-automatic',
      label: 'Automatic',
      available: transmission === 'automatic',
    },
    { icon: 'icon-fuel', label: engine, available: engine },
    { icon: 'icon-kitchen', label: 'Kitchen', available: kitchen },
    { icon: 'icon-ac', label: 'AC', available: AC },
    { icon: 'icon-bathroom', label: 'Bathroom', available: bathroom },
    { icon: 'icon-radio', label: 'Radio', available: radio },
    { icon: 'icon-tv', label: 'TV', available: TV },
  ].filter(item => item.available);

  return (
    <div className={css.camperCard}>
      <img src={gallery[0].thumb} alt={name} className={css.camperImage} />

      <div className={css.camperDetails}>
        <div className={css.header}>
          <div className={css.headerContent}>
            <h2 className={css.camperTitle}>{name}</h2>
            <p className={css.camperPrice}>
              <span className={css.price}>€{price.toFixed(2)}</span>
              <Icon name="icon-heart" className="small" />
            </p>
          </div>

          <p className={css.camperRating}>
            <span className={css.rating}>
              <Icon name="icon-star" className="iconStar" />
              {rating} ({reviews.length} Reviews)
            </span>
            <span className={css.location}>
              <Icon name="icon-map" className="smallest" />
              {location}
            </span>
          </p>
        </div>

        <p className={css.camperDescription}>{description}</p>

        <div className={css.equipmentList}>
          {equipment.map((item, index) => (
            <span key={index} className={css.equipmentItem}>
              <Icon name={item.icon} className={css.equipmentIcon} />
              {item.label}
            </span>
          ))}
        </div>

        <Button className={css.showMoreButton} aria-label="Show More">
          <Link to={`/catalog/${id}`}>Show More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Camper;
