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
    <div className={cake.PrincipalcontainerCake}>
      <section className={cake.containerCake__containSelectOne}>
        <h3 htmlFor="tastes" className={cake.containerCake__title}>Sabores</h3>
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

      </section>
      <section className={cake.containerCake__containSelectOne}>
        <h3 htmlFor="tastes" className={cake.containerCake__title}>Tamaños</h3>
        <select name="size" className={cake.containerCake} label="size" onChange={handelChange} >
              <option name="null"> </option>
              {
                sizes.map((size)=>{
                  return (
                    <>
                      <option name="size" key={size}>{size}</option>

                    </>
                  )
                })
              }

        </select>

      </section>


    </div>
  )
}
export default Filter;
