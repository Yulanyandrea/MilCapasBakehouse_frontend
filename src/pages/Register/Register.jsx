import { useState } from 'react';
import { useRouter } from 'next/router';
import useForms from '@/hooks/useForm';
import { createUser } from '../../feature/users/userApi';
import Header from '@/components/Header/Header';
import register from './resgister.module.css';

const Register = () => {
  const router = useRouter();
  const { forms, handleChange } = useForms({})
  const [modal , setModal] = useState(false)


  const handleRegisterDone = () => {
    setModal(true)
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
        <input type="text" className={register["registerContainer__form--input"]} name = "fullName" placeholder="Nombre" onChange={handleChange}/>
        <input type="text" className={register["registerContainer__form--input"]} name = "email" placeholder="Email" onChange={handleChange}/>
        <input type="text" className={register["registerContainer__form--input"]} name = "address" placeholder="Dirección" onChange={handleChange}/>
        <input type="text" className={register["registerContainer__form--input"]} name = "password" placeholder="Contraseña"onChange={handleChange}/>
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
