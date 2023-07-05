import { useState } from 'react';

const useForms = (value) => {
  const [form, setForm] = useState({})

  const handleChange = ({target}) => {
    const formValue = target.name;
    setForm({... form, [formValue]: target.value})
  }

  return{
    form,
    handleChange
  }
}

export default useForms;
