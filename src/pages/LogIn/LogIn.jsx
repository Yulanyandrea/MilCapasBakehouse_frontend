import logIn from './login.module.css';
import Header from '@/components/Header/Header';

const LogIn = () => {
  return (
    <section className={logIn.containerLogIn}>
        <Header />
        <section className={logIn.containerLogIn__inputs}>
          <input type="text" />
          <input type="text" />
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </section>


    </section>
  )
}
export default LogIn;
