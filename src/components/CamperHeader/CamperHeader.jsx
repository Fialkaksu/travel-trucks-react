import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Icon from '@components/Icon/Icon';

import { selectIsFavorite } from "@redux/favorites/selectors";
import { addFavorite, removeFavorite } from "@redux/favorites/slice";

import css from './CamperHeader.module.css';

const CamperHeader = ({ camper }) => {
  const { id, name, price, rating, location, reviews = [] } = camper;
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectIsFavorite(state, id));
  const locationPath = useLocation();

  const isPathDetails = locationPath.pathname.includes('/catalog/');

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(camper));
    }
  }

  return (
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.camperTitle}>{name}</h2>

        {!isPathDetails && (
          <p className={css.camperPrice}>
            <span className={css.price}>€{price.toFixed(2)}</span>
            <Icon name="icon-heart" className="iconHeart" onClick={handleClick} active={isFavorite} />
          </p>
        )}
      </div>

      <p className={css.camperRating}>
        <span className={css.rating}>
          <Icon name="icon-star" className="iconStar" />
          <span className={css.ratingValue}>{rating} ({reviews.length} Reviews)</span>
        </span>
        <span className={css.location}>
          <Icon name="icon-map" className="smallest" />
          {location}
        </span>
      </p>

      {isPathDetails && (
        <p className={css.price}>€{price.toFixed(2)}</p>
      )}
    </div>
  )
}

export default CamperHeader