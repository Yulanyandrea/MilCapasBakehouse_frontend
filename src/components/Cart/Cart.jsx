import cart from './cart.module.css';
import Image from 'next/image';

const Cart = ({milhoja}) => {
  return(
    <section className={cart.principalCart}>
        {/* <Image src={milhoja?.image} alt="" className={cart.principalCart__image} width={100} height={100}/>
        <section className={cart.principalCart__detail}>
          <h3 className={cart["principalCart__detail--title"]}>Producto</h3>
          <h3 className={cart["principalCart__detail--value"]}>{milhoja.milhojaName}</h3>
          <h3 className={cart["principalCart__detail--title"]}>Tamaño</h3>
          <p className={cart["principalCart__detail--value"]}>{milhoja.size}</p>
          <h3 className={cart["principalCart__detail--title"]}>Cantidad</h3>
          <input type="number">{}</input>
          <h3 className={cart["principalCart__detail--title"]}>Subtotal</h3>
          <p className={cart["principalCart__detail--value"]}>{milhoja.price}</p>
        </section>

        <button type="submit" className={cart.principalCart__button}></button> */}


    </section>
  )
}

export default Cart;
