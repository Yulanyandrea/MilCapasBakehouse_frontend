import { useUser } from '@auth0/nextjs-auth0/client';
import { useDispatch } from 'react-redux';
import { addUser } from '../../feature/users/userSlice';
import auth0 from './auth0.module.css';
import Header from '@/components/Header/Header';
import useForm from '../../hooks/useForm';


const Auth0Data = () => {
  const dispath = useDispatch();
  const {form, handleChange} = useForm()
  const { user, error, isLoading } = useUser();

  const handleSave = (e) => {
    e.preventDefault()
    dispath(addUser(form))

  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return(
    <section className={auth0.containerauth0}>
      <Header />
      <section className={auth0.auth0Input}>
        <h1 className={auth0.auth0Input__title}>Hola {user.name} 🍰🎉</h1>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="Email" onChange={handleChange} name='email' value={user?.email}/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="address" onChange={handleChange} name='address'/>
        <input type="text" className={auth0["auth0Input__inputs--configDetail"]} placeholder="phone" onChange={handleChange} name='phone'/>
        <button className={auth0["auth0Input__inputs--btn"]} onClick={handleSave}>Guardar</button>

      </section>


    </section>
  )
}

export default Auth0Data;
