import auth0 from './auth0.module.css';
import Header from '@/components/Header/Header';

const Auth0Data = () => {
  return(
    <section className={auth0.containerauth0}>
      <Header />
      <section className={auth0.auth0Input}>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="Email" onChange={handleChange} name='email'/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="name" onChange={handleChange} name='name'/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="address" onChange={handleChange} name='address'/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="phone" onChange={handleChange} name='phone'/>
        <button className={auth0["auth0Input__inputs--btn"]} >Guardar</button>

      </section>


    </section>
  )
}

export default Auth0Data;
