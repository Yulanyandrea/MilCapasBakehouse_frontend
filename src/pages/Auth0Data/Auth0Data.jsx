import auth0 from './auth0.module.css';
import Header from '@/components/Header/Header';
import useForm from '../../hooks/useForm';
import { useUser } from '@auth0/nextjs-auth0/client';

const Auth0Data = () => {
  const {form, handleChange} = useForm()

  return(
    <section className={auth0.containerauth0}>
      <Header />
      <section className={auth0.auth0Input}>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="Email" onChange={handleChange} name='email'>{useUser.email} </input>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="name" onChange={handleChange} name='name'>{useUser.name}</input>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="address" onChange={handleChange} name='address'/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="phone" onChange={handleChange} name='phone'/>
        <button className={auth0["auth0Input__inputs--btn"]} >Guardar</button>

      </section>


    </section>
  )
}

export default Auth0Data;
