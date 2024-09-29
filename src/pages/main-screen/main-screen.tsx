import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Sort } from '../../components/sort/sort';
import { Offer, City, OnOfferClickHandlerProps } from '../../types/offers';
import { OfferList } from '../../components/offer-list/offer-list';
import { OfferListEmpty } from '../../components/offer-list/offer-list-empty';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { changeCity } from '../../store/city-process/city-process';
import { resetSort } from '../../store/offer-data/offer-data';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCurrentCity } from '../../store/city-process/selectors';

type MainScreenProps = {
  offers: Offer[];
  onOfferClickHandler: OnOfferClickHandlerProps;
}

export const MainScreen = ({offers, onOfferClickHandler}: MainScreenProps): JSX.Element => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const currentCity = useAppSelector(selectCurrentCity);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const offersByCity = offers.filter((offer) => offer.city.name === currentCity.name);

  const citiesListClickHandler = (city: City) => {
    dispatch(changeCity(city));
    dispatch(resetSort());
    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов. Главная</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onCityClick={citiesListClickHandler} currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          {
            offersByCity.length === 0
              ? <OfferListEmpty currentCity={currentCity}/>
              : (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offersByCity.length} places to stay in {currentCity.name}</b>
                    <Sort />
                    <OfferList offers={offersByCity} activeOfferId={activeOfferId} setActiveOfferId={setActiveOfferId} isNear={false} onOfferClickHandler={onOfferClickHandler} />
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map
                        city={currentCity}
                        points={offersByCity}
                        selectedOffer={offers.find((offer) => offer.id === activeOfferId)}
                      />
                    </section>
                  </div>
                </div>
              )
          }
        </div>
      </main>
    </div>
  );
};

