import { useRouter } from 'next/router';
import menu from './menu.module.css';

const Menu = () => {
  const router = useRouter();
  const handleTorta = (e) => {
    e.preventDefault();
    router.push('/Cake/Cake');
  };
  return (
    <section className={menu.menu}>
      <section className={menu.menu__btn}>
        <button type="submit" className={menu["menu__button--smallSize"]} onClick={handleTorta}>Milhojas</button>
      </section>
    </section>

  );
};
export default Menu;
