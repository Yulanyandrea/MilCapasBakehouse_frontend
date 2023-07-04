import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import register from './resgister.module.css';

const Register = () => {
  const router = useRouter();
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
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Nombre"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Email"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Dirección"/>
        <input type="text" className={register["registerContainer__form--input"]} placeholder="Contraseña"/>
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
