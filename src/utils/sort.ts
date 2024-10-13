import { Offer } from '../types/offers';
import { Sorts } from '../const';

export const sortOffersPriceLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;
export const sortOffersPriceHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;
export const sortTopRatingFirst = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

const sortOffersBySort = (sort: (offerA: Offer, offerB: Offer) => number) => (offers: Offer[]) => offers.sort(sort);

export const sortOffers = {
  [Sorts.POPULAR]: (offers: Offer[]) => offers,
  [Sorts.PRICE_LOW_TO_HIGH]: sortOffersBySort(sortOffersPriceLowToHigh),
  [Sorts.PRICE_HIGH_TO_LOW]: sortOffersBySort(sortOffersPriceHighToLow),
  [Sorts.TOP_RATED_FIRST]: sortOffersBySort(sortTopRatingFirst)
};
