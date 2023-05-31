import { useDispatch, useSelector } from 'react-redux';
import cake from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.cakeMilhoja);
  return (
    <>
      <select name="taste" className={cake.containerCake} label="taste" >
            <option name="null"> </option>
            {
              products.map((product)=>{
                return (
                  <>
                    <option name="taste" key={product._id}>{product.taste}</option>

                  </>
                )
              })
            }

          </select>

    </>
  )
}
export default Filter;
