import logIn from './login.module.css';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
import { userLogIn } from '../../feature/users/userSlice';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import Link from 'next/link';

const LogIn = () => {
  const {form, handleChange} = useForm()
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(form).length < 2) {

      } else {
        const response = await dispatch(userLogIn(form));
        if (response.payload.message === 'Invalid email or password') {

        } else {
          router.push('/PrincipalPage/PrincipalPage')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleRegisterForm = (e) => {
    e.preventDefault();
    router.push('/Register/Register');
  }
  return (
    <section className={logIn.containerLogIn}>
        <Header />
        <section className={logIn.containerLogIn__inputs}>
          <section className={logIn["containerLogIn__inputs--config"]}>
            <input type="text" className={logIn["containerLogIn__inputs--configDetail"]} placeholder="Email" onChange={handleChange} name='email'/>
            <input type="password" className={logIn["containerLogIn__inputs--configDetail"]} placeholder="Contraseña" onChange={handleChange} name='password'/>
            <button className={logIn["containerLogIn__inputs--btn"]} onClick={handleLogin}>Iniciar Sesión</button>
            <button className={logIn["containerLogIn__inputs--btn"]} onClick={handleRegisterForm}>Registrarse</button>
            <h3>o Ingresa con : </h3>
            <button className={logIn["containerLogIn__inputs--btnGoogle"]}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
               Google
               <Link href="/api/auth/login">Login</Link>
            </button>

          </section>

        </section>


    </section>
  )
}
export default LogIn;
