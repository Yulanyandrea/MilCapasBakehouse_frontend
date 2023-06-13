import Image from 'next/image';
import cake from './milhojas.module.css';

const Milhojas = ({products}) => {
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
            <section className={cake.containerCake__submitBtn}>
              <button type="submit" className={cake["containerCake__submitBtn--sub"]}>Agregar</button>
            </section>
            </section>

      </section>

    </>
  )
}

export default Milhojas;
