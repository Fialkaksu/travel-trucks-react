import { useSelector } from 'react-redux';

import DocumentTitle from '@components/DocumentTitle';
import Container from '@components/Container/Container';
import CamperList from '@components/CamperList/CamperList';

import { selectFavorites } from '@redux/favorites/selectors';

import css from './FavoritesPage.module.css';


const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <DocumentTitle title="Travel Trucks | Favorite Campers" />

      <main>
        <section className={css.section}>
          <Container className="favorites">
            {favorites.length > 0 ? <CamperList items={favorites} /> : <p className={css.noFavorites}>You have no favorite campers yet</p>}
          </Container>
        </section>
      </main>
    </>
  );
};

export default FavoritesPage;