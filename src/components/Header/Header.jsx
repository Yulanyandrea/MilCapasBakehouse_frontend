import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import header from './header.module.css';

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/PrincipalPage/PrincipalPage');
  };
  return (
    <section className={header.containerHeader}>
      <section className={header.containerHeader__amasaDetails}>
        <FontAwesomeIcon icon={faCheese} />
        <FontAwesomeIcon icon={faBreadSlice} className={header["PrincipalPage__Principaltitle--icon2"]} />
        {/* <img src="./images/cake.png" alt="" className="containerHeader__image" /> */}
        <h1 className={header.containerHeader__title}>Amasa Milhojeria</h1>
      </section>
      <section className={header.containerHeader__shoppingCart}>
        <button type="submit" className={header["containerHeader__shoppingCart--home"]} onClick={handleClick}>Inicio</button>
        <button type="submit" className={header["containerHeader__shoppingCart--btn"]}>
          <FontAwesomeIcon icon={faCartShopping} className={header["containerHeader__shoppingCart--btnIcon"]} />
        </button>
      </section>
    </section>

  );
};

export default Header;
