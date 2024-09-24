import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import DocumentTitle from '@components/DocumentTitle';
import Container from '@components/Container/Container';
import CamperList from '@components/CamperList/CamperList';
import ScrollUp from '@components/ScrollUp/ScrollUp';

import { selectFavorites } from '@redux/favorites/selectors';
import { scrollToTheTop } from '@utils/utils';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  useEffect(scrollToTheTop, []);

  return (
    <>
      <DocumentTitle title="Travel Trucks | Favorite Campers" />

      <main>
        <section className={css.section}>
          <Container className="favorites">
            {favorites.length > 0 ? (
              <CamperList items={favorites} />
            ) : (
              <p className={css.noFavorites}>
                You have no favorite campers yet
              </p>
            )}
          </Container>
        </section>
      </main>
      <ScrollUp />
    </>
  );
};

export default FavoritesPage;
