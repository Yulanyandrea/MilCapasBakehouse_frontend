import Header from '@/components/Header/Header';
import register from './resgister.module.css';

const Register = () => {
  return (
    <section className={register.registerContainer}>
      <Header />
      <section className={register.registerContainer__form}>
        <h3>Nueva cuenta</h3>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Nombre"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Email"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Dirección"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Contraseña"/>
        <button className={register["registerContainer__form--btn"]}>Registrarme</button>

      </section>

    </section>

  )
}

export default Register;
