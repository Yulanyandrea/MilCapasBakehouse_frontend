import Image from 'next/image';
import { increment,decrement,productsData } from '../../feature/products/productSlice';
import { useDispatch,useSelector } from 'react-redux';
import cake from './milhojas.module.css';

const Milhojas = ({products}) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.products?.cake);
  return (
    <>
      <section className={cake.containerCake__side2}>
            <Image src={products?.image} alt="" className={cake.containerCake__image} width={100} height={100} />
            <section className={cake.containerCake__description}>
              <p className={cake.containerCake___detail}>Detalles del producto</p>
              <p className={cake.containerCake__title}>{products?.detail}</p>
              <p className={cake.containerCake___detail}>Tamaño</p>
              <p className={cake.containerCake__title}>{products?.size}</p>
              <p className={cake.containerCake___detail}>Precio</p>
              <p className={cake.containerCake__title}>{products?.price}</p>
              <section className={cake.containerCake__amount}>
              <button type="submit" className={cake.containerCake__subtraction} onClick={() => dispatch(decrement())}>-</button>
              <label htmlFor="taste" className={cake["containerCake__amount--am"]}>{data}</label>
              <button type="submit" className={cake.containerCake__add} onClick={() => dispatch(increment())}>+</button>
            </section>
            <section className={cake.containerCake__submitBtn}>
              <button type="submit" className={cake["containerCake__submitBtn--sub"]}>Agregar</button>
            </section>
            </section>

      </section>

    </>
  )
}

export default Milhojas;
