import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import Items from '../../components/Items/Items';

import principal from './principalPage.module.css'

const PrincipalPage = () => {
  return (
    <section className={principal.PrincipalPageContainer}>
      <header className={principal.PrincipalPage}>
        <section className={principal.PrincipalPage__Principaltitle}>
          <FontAwesomeIcon icon={faCheese} />
          <FontAwesomeIcon icon={faBreadSlice} className={principal["PrincipalPage__Principaltitle--icon2"]} />

          <h1 className={principal.PrincipalPage__title}>Bienvenido a Mil capas Bakehouse</h1>

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
