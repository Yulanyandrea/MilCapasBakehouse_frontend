import logIn from './login.module.css';
import Header from '@/components/Header/Header';

const LogIn = () => {
  return (
    <section className={logIn.containerLogIn}>
        <Header />
        <section className={logIn.containerLogIn__inputs}>
          <section className={logIn["containerLogIn__inputs--config"]}>
            <input type="text" className={logIn["containerLogIn__inputs--configDetail"]} placeholder="Email"/>
            <input type="text" className={logIn["containerLogIn__inputs--configDetail"]} placeholder="Password"/>
            <button className={logIn["containerLogIn__inputs--btn"]}>Iniciar Sesión</button>
            <button className={logIn["containerLogIn__inputs--btn"]}>Registrarse</button>

          </section>

        </section>


    </section>
  )
}
export default LogIn;
