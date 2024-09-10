import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DocumentTitle from '@components/DocumentTitle';
import Container from '@components/Container/Container'
import FiltersForm from '@components/FiltersForm/FiltersForm'
import Campers from '@components/Campers/Campers'
import Loader from '@components/Loader/Loader'

import { getCampers } from '@redux/campers/operations'
import { selectIsLoading } from '@redux/campers/selectors'

import css from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle title='Catalog' />

      <main>
        <section className={css.section}>
          <Container className='catalog'>
            <FiltersForm />
            {isLoading && <Loader />}
            <Campers />
          </Container>
        </section>
      </main>
    </>
  )
}

export default CatalogPage