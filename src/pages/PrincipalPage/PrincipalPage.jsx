import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsData } from '../../feature/products/productSlice';
import Items from '../../components/Items/Items';

import principal from './principalPage.module.css'

const PrincipalPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData())
  })
  return (
    <section className={principal.PrincipalPageContainer}>
      <header className={principal.PrincipalPage}>
        <section className={principal.PrincipalPage__Principaltitle}>
          <FontAwesomeIcon icon={faCheese} />
          <FontAwesomeIcon icon={faBreadSlice} className={principal["PrincipalPage__Principaltitle--icon2"]} />

          <h1 className={principal.PrincipalPage__title}>Bienvenido a Amasa Milhojeria</h1>

        </section>

        <div className={principal.PrincipalPage__line} />
      </header>
      <div className={principal.PrincipalPage__section}>

        <section className={principal.PrincipalPage__section2}>
          <Items />
        </section>

      </div>

    </section>
  );
};
export default PrincipalPage;
