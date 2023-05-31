import Header from '../../components/Header/Header';
import container from '../Cake/cake.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '@/components/Filter/Filter';
import Milhojas from '@/components/Milhojas/Milhojas';

const Personal = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products?.personalCake)
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
export default Personal;
