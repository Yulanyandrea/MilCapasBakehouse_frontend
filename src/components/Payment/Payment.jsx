import { addUser } from '../../feature/users/userSlice';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import payment from './payment.module.css'


const Payment = ({form, user}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(addUser({...form,user}))
    if(!form.address || !form.phone ){
      setModal(true)
      setDataError('*Este campo es obligatorio')
    return;
    }


  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className={payment.stripeCss}/>
      <button className={payment["auth0Input__inputs--btn"]} onClick={handleSave} >Realizar pedido</button>
    </form >
  )
}

export default Payment;
