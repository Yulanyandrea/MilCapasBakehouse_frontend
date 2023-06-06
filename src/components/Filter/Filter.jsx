import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { milhojasDataBase } from '../../feature/products/productSlice';
import { getFilterMilhojas } from '../../services/productServices';
import cake from './filter.module.css';

const Filter = ({onFilterChange}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(milhojasDataBase());
  }, []);

  const productMilhoja = useSelector((state) => state.products?.dataBase);
  // taste
  const tastes = getFilterMilhojas(productMilhoja, 'taste');
  //size
  const sizes = getFilterMilhojas(productMilhoja, 'size');

  const handelChange = ({ target }) => {
    const { value, name } = target;
    onFilterChange({ [name]: value });
  };
  return (
    <>
      <select name="taste" className={cake.containerCake} label="taste" onChange={handelChange} >
            <option name="null"> </option>
            {
              tastes.map((taste)=>{
                return (
                  <>
                    <option name="taste" key={taste}>{taste}</option>

                  </>
                )
              })
            }

      </select>

    </>
  )
}
export default Filter;
