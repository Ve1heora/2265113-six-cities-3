import { Link } from 'react-router-dom';
import { Offer, OnOfferClickHandlerProps } from '../../types/offers';
import { PlaceCardRating } from '../card/place-card-rating';

const status = false;

type FavoriteCardProps = {
  offer: Offer;
  onOfferClickHandler: OnOfferClickHandlerProps;
}

export const FavoriteCard = ({ offer, onOfferClickHandler }: FavoriteCardProps) => (
  <article className="favorites__card place-card" key={offer.id} onClick={(evt) => onOfferClickHandler({offer, evt})}>
    { offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : '' }
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      < PlaceCardRating rating={offer.rating} status={status}/>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
