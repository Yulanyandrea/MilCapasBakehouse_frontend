import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { productsData } from '../../feature/products/productSlice';
import Header from '../../components/Header/Header';
import container from './cake.module.css';
import Filter from '@/components/Filter/Filter';
import Milhojas from '@/components/Milhojas/Milhojas';


const Cake = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    taste: '',
  });
  const allMilhojas = useSelector((state) => state.products?.cakeMilhoja)
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    setSelectedFilter({ ...selectedFilter, ...filter });
  };

  useEffect(()=> {
    dispatch(productsData())
  },[])

  useEffect(() => {
    dispatch(productsData(selectedFilter));
  }, [selectedFilter]);


  return (
    <section className={container.principalContainer}>
      <header>
        <Header />
      </header>

      <aside className={container.containerCake}>
        <h2 className={container.containerCakeTitle}>Sabores</h2>
        <Filter  onFilterChange={handleFilterChange} />
        {
          allMilhojas.map((milhoja) =>{
            return (
              <Milhojas key={milhoja._id} products={milhoja}/>

            )
          })
        }

      </aside>
    </section>

  );
};
export default Cake;
