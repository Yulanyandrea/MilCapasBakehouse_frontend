import Header from '../../components/Header/Header';
import Image from 'next/image';
import cake from './cake.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,productsData } from '../../feature/products/productSlice';


const Cake = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products?.cake);
  const products = useSelector((state) => state.products?.milhojas);

  return (
    <>
      <Header />
      <section className={cake.containerCake}>
        <aside className={cake.containerCake__side1}>
          <h2 className={cake.containerCake}>Sabores</h2>
          <select name="taste" className={cake.containerCake} label="taste">
            <option name="null"> </option>
            {
              products.map((product)=>{
                return (
                  <option name="taste" key={products._id}>{product.taste}</option>
                )
              })
            }

          </select>

        </aside>
        <aside className={cake.containerCake__side2}>
          <Image src="/images/cakeAmasa.jpg" alt="" className={cake.containerCake__image} width={100} height={100}/>
          <section className={cake.containerCake__description}>
            <title className={cake.containerCake__title}>Arandanos</title>
            <p className={cake.containerCake___detail}>Detalles del producto</p>
          </section>
          <section className={cake.containerCake__amount}>
            <button type="submit" className={cake.containerCake__subtraction} onClick={() => dispatch(decrement())}>-</button>
            <label htmlFor="taste" className={cake["containerCake__amount--am"]}>{data}</label>
            <button type="submit" className={cake.containerCake__add} onClick={() => dispatch(increment())}>+</button>
          </section>
          <section className={cake.containerCake__submitBtn}>
            <button type="submit" className={cake["containerCake__submitBtn--sub"]}>Agregar</button>
          </section>
        </aside>
      </section>

    </>

  );
};
export default Cake;
