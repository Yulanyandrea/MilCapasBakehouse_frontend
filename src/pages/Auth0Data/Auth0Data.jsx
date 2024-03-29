import { useUser } from '@auth0/nextjs-auth0/client';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import auth0 from './auth0.module.css';
import Header from '@/components/Header/Header';
import useForm from '../../hooks/useForm';
import Image from 'next/image';
import Payment from '@/components/Payment/Payment';

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);


const Auth0Data = () => {
  const dispath = useDispatch();
  const registerUser = useSelector((state) =>state.user?.userLogin.profile)
  const shoppingCartData = useSelector((state)=>state.products?.shoppingCart)
  const {form, handleChange} = useForm()
  const { user, error, isLoading } = useUser();
  const [modal, setModal] = useState(false);
  const [dataError, setDataError] = useState('');

  const totalPrice = shoppingCartData.reduce((acc, prod) => acc + parseFloat(prod.price)*prod.amount, 0);

  const closeModal = () => {
    setModal(false)
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return(
    <section className={auth0.containerauth0}>
      <Header />
      <section className={auth0.auth0Input}>
        <h1 className={auth0.auth0Input__title}>Hola {user !== undefined ?  user.name : registerUser.fullName   } 🍰</h1>
        <label htmlFor="taste" className={auth0["auth0Input__inputs--label"]}>Correo*</label>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="Email" onChange={handleChange} name='email' value={user !== undefined ?  user.email : registerUser.email  }/>

        <label htmlFor="taste" className={auth0["auth0Input__inputs--label"]}>Dirección*</label>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="address" onChange={handleChange} name='address' value={registerUser?.address  !== undefined ?  registerUser?.address  : null  }/>
        {form.address ? <span  className={auth0["auth0Input__inputs--validation"]}>{dataError}</span> : <span  className={auth0["auth0Input__inputs--validation"]}>*Este campo es obligatorio</span>}

        <label htmlFor="taste" className={auth0["auth0Input__inputs--label"]}>Celular*</label>
        <input type="number" className={auth0["auth0Input__inputs--configDetail"]} placeholder="phone" onChange={handleChange} name='phone' value={registerUser?.phone  !== undefined ?  registerUser?.phone  : null  }/>
        {form.address ? <span  className={auth0["auth0Input__inputs--validation"]}>{dataError}</span> : <span  className={auth0["auth0Input__inputs--validation"]}>*Este campo es obligatorio</span>}

        <h3>Productos agregados al carrito</h3>
        {
          shoppingCartData.map((products)=> {
            return (
              <section className={auth0.shoppingCartSummary} key={products?._id}>
                <Image src={products?.image} alt="" className={auth0.shoppingCartSummary__image} width={100} height={100}/>

                <section className={auth0.shoppingCartSummary__group} >

                  <h4 className={auth0["shoppingCartSummary__group--text"]}>Sabor: {products.taste}</h4>
                  <h4  className={auth0["shoppingCartSummary__group--text"]}>Tamaño: {products.size}</h4>
                  <h4  className={auth0["shoppingCartSummary__group--text"]}>Cantidad: {products.amount}</h4>
                  <h4 className={auth0["shoppingCartSummary__group--text"]}>Precio: {products.price}</h4>

                </section>
              </section>

            )
          })
        }
        <h2 className={auth0["shoppingCartSummary__group--text"]}>Total: {totalPrice.toFixed(3)}</h2>
        <Elements stripe={stripePromise}>
          <Payment form={form} user={user}/>
        </Elements>

      </section>

      { modal && (
        <div className={auth0.modal}>
          <div className={auth0.modal__content}>
            <p>Todos campo es obligatorio</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )

      }




    </section>
  )
}

export default Auth0Data;
