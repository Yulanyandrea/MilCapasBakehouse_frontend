import Header from '../../components/Header/Header';
import container from '../Cake/cake.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { productsDataHalfCake } from '../../feature/products/productSlice';
import Filter from '@/components/Filter/Filter';
import Milhojas from '@/components/Milhojas/Milhojas';

const HalfCake = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    taste: '',
  });
  const allMilhojas = useSelector((state) => state.products?.halfCake)
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    setSelectedFilter({ ...selectedFilter, ...filter });
  };

  useEffect(()=> {
    dispatch(productsDataHalfCake())
  },[])

  useEffect(() => {
    dispatch(productsDataHalfCake(selectedFilter));
  }, [selectedFilter]);

  return (
    <section className={container.principalContainer}>
    <header>
      <Header />
    </header>

    <aside className={container.containerCake}>
      <Filter onFilterChange={handleFilterChange}/>
      {
        allMilhojas.map((milhoja) => {
          return (
            <Milhojas key={milhoja._id} products={milhoja}/>
          )
        })
      }

    </aside>
  </section>

  );
};

export default HalfCake;
