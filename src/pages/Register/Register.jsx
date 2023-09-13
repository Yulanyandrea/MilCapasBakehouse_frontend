import { useState } from 'react';
import { useRouter } from 'next/router';
import useForms from '@/hooks/useForm';
import { createUser } from '../../feature/users/userApi';
import Header from '@/components/Header/Header';
import register from './resgister.module.css';

const Register = () => {
  const router = useRouter();
  // hook to get data from inputs
  const { form, handleChange } = useForms({})
  // modal state
  const [modal , setModal] = useState(false)
  // validation
  const [Error, setError] = useState('');


  const handleRegisterDone = async (e) => {
    e.preventDefault();
    setError('')
    if (!form.fullName) {
      setError('* Este campo es obligatorio');
    } else if (!form.email) {
      setError('* Este campo es obligatorio');
    } else if (!form.address) {
      setError('* Este campo es obligatorio');
    } else if (!form.password) {
      setError('* Este campo es obligatorio');
    }
    else {
      try {
        const res = await createUser({ ...form });
      } catch (error) {
        console.error(error);
      }
      setModal(true)

    }

  }


  const handleCloseModal = () => {
    setModal(false)
    router.push('/PrincipalPage/PrincipalPage');
  }
  return (
    <section className={register.registerContainer}>
      <Header />
      <section className={register.registerContainer__form}>
        <h3>Nueva cuenta</h3>
        <input type="text" className={register["registerContainer__form--input"]}  name = "completeName" placeholder="Nombre" onChange={handleChange}/>
        {Error && (
          <span className={register['registerContainer__form--error']}>
            {Error}
          </span>
        )}

        <input type="email" className={register["registerContainer__form--input"]}  name = "email" placeholder="Email" onChange={handleChange}/>
        {Error && (
          <span className={register['registerContainer__form--error']}>
            {Error}
          </span>
        )}

        <input type="text" className={register["registerContainer__form--input"]}  name = "address" placeholder="Dirección" onChange={handleChange}/>
        {Error && (
          <span className={register['registerContainer__form--error']}>
            {Error}
          </span>
        )}

        <input type="number" className={register["registerContainer__form--input"]}  name = "phone" placeholder="Celular" onChange={handleChange}/>
        {Error && (
            <span className={register['registerContainer__form--error']}>
              {Error}
            </span>
        )}

        <input type="password" className={register["registerContainer__form--input"]}  name = "password" placeholder="Contraseña"onChange={handleChange}/>
        {Error && (
          <span className={register['registerContainer__form--error']}>
            {Error}
          </span>
        )}

        <button className={register["registerContainer__form--btn"]} onClick={handleRegisterDone}>Registrarme</button>

      </section>
      {
        modal && (
          <div className={register.modal}>
            <div className={register.modal__content}>
              <p>Te has registrado exitosamente 🍰🎉 </p>
              <button onClick={handleCloseModal}>Cerrar</button>
            </div>
          </div>
        )
      }

    </section>

  )
}

export default Register;
