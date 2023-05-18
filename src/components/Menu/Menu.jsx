import { useRouter } from 'next/router';
import menu from './menu.module.css';

const Menu = () => {
  const router = useRouter();

  const handlePersonal = (e) => {
    e.preventDefault();
    router.push('/Personal/Personal');
  };

  const handleBocado = (e) => {
    e.preventDefault();
    router.push('/HalfCake/HalfCake');
  };

  const handleTorta = (e) => {
    e.preventDefault();
    router.push('/Cake/Cake');
  };
  return (
    <section className={menu.menu}>
      <section className={menu.menu__btn}>
        <button type="submit" className={menu["menu__button--smallSize"]} onClick={handleBocado}>Bocado</button>
      </section>

      <section className={menu.menu__btn}>
        <button type="submit" className={menu["menu__button--smallSize"]} onClick={handlePersonal}>Personal</button>
      </section>

      <section className={menu.menu__btn}>
        <button type="submit" className={menu["menu__button--smallSize"]} onClick={handleTorta}>Torta</button>
      </section>
    </section>

  );
};
export default Menu;
