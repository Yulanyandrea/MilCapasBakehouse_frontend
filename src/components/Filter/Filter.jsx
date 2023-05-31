import { useDispatch, useSelector } from 'react-redux';
import { getFilterMilhojas } from '../../services/productServices';
import cake from './filter.module.css';

const Filter = ({onFilterChange}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.cakeMilhoja);
  const tastes = getFilterMilhojas(products, 'taste');

  const handelChange = ({ target }) => {
    const { value, name } = target;
    onFilterChange({ [name]: value });
  };
  return (
    <>
      <select name="taste" className={cake.containerCake} label="taste" onChange={handelChange} >
            <option name="null"> </option>
            {/* {
              tastes.map((taste)=>{
                return (
                  <>
                    <option name="taste" key={taste}>{taste}</option>

                  </>
                )
              })
            } */}

          </select>

    </>
  )
}
export default Filter;
