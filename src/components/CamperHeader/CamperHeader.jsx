import Icon from '@components/Icon/Icon';

import css from './CamperHeader.module.css';

const CamperHeader = ({ isCamperDetails, name, price, rating, location, reviews = [] }) => {
  return (
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.camperTitle}>{name}</h2>

        {!isCamperDetails && (
          <p className={css.camperPrice}>
            <span className={css.price}>€{price.toFixed(2)}</span>
            <Icon name="icon-heart" className="iconHeart" />
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

      {isCamperDetails && (
        <p className={css.price}>€{price.toFixed(2)}</p>
      )}
    </div>
  )
}

export default CamperHeader