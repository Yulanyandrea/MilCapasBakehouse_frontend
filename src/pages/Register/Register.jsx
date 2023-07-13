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
  const [dataError, setDataError] = useState();

  const handleRegisterDone = async (e) => {
    e.preventDefault();
    if(form.fullName=== undefined || form.fullName.length===0 ){
      setDataError('* Este campo es obligatorio ')
    }else if (form.email === undefined || form.email.length===0  ){
      setDataError('* Este campo es obligatorio ')
    }else if(form.address === undefined || form.address.length===0  ){
      setDataError('* Este campo es obligatorio ')
    }else if(form.password === undefined || form.password.length===0 ){
      setDataError('* Este campo es obligatorio ')
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
        <input type="text" className={register["registerContainer__form--input"]} name = "fullName" placeholder="Nombre" onChange={handleChange}/>
        {dataError ? <span className={register["registerContainer__form--error"]}>{dataError}</span> : null}

        <input type="text" className={register["registerContainer__form--input"]} name = "email" placeholder="Email" onChange={handleChange}/>
        {dataError ? <span className={register["registerContainer__form--error"]}>{dataError}</span> : null}

        <input type="text" className={register["registerContainer__form--input"]} name = "address" placeholder="Dirección" onChange={handleChange}/>
        {dataError ? <span className={register["registerContainer__form--error"]}>{dataError}</span> : null}

        <input type="password" className={register["registerContainer__form--input"]} name = "password" placeholder="Contraseña"onChange={handleChange}/>
        {dataError ? <span className={register["registerContainer__form--error"]}>{dataError}</span> : null}

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
