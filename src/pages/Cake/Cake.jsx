import Header from '../../components/Header/Header';
import container from './cake.module.css';
import Filter from '@/components/Filter/Filter';
import Milhojas from '@/components/Milhojas/Milhojas';


const Cake = () => {

  return (
    <section className={container.principalContainer}>
      <header>
        <Header />
      </header>

      <aside className={container.containerCake}>
        <h2 className={container.containerCakeTitle}>Sabores</h2>
        <Filter />
        <Milhojas />
      </aside>
    </section>

  );
};
export default Cake;
