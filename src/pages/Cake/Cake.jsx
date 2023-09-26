import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { productsData } from '../../feature/products/productSlice';
import Header from '../../components/Header/Header';
import container from './cake.module.css';
import Filter from '@/components/Filter/Filter';
import Milhojas from '@/components/Milhojas/Milhojas';
import Load from '@/components/Load/Load';


const Cake = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState({
    taste: '',
    size:''
  });
  const allMilhojas = useSelector((state) => state.products?.cakeMilhoja)
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    setSelectedFilter({ ...selectedFilter, ...filter });
  };

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 
    dispatch(productsData())
  },[])

  useEffect(() => {
    dispatch(productsData(selectedFilter));
  }, [selectedFilter]);


  return (
    <section className={container.principalContainer}>
      { isLoading ? (<Load/>) : <>
      <header>
        <Header />
      </header>

      <aside className={container.containerCake}>

        <Filter  onFilterChange={handleFilterChange} />
        {
          allMilhojas.map((milhoja) =>{
            return (
              <Milhojas key={milhoja._id} products={milhoja}/>

            )
          })
        }

      </aside>
      
      
      </>}
      
    </section>

  );
};
export default Cake;
