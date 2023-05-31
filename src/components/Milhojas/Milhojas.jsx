import Image from 'next/image';
import { increment,decrement,productsData } from '../../feature/products/productSlice';
import { useDispatch,useSelector } from 'react-redux';
import cake from './milhojas.module.css';

const Milhojas = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.products?.cake);
  return (
    <>
    <aside className={cake.containerCake__side2}>
          <Image src="/images/bocado.png" alt="" className={cake.containerCake__image} width={100} height={100} />
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

    </>
  )
}

export default Milhojas;
