const API = process.env.NEXT_PUBLIC_API_KEY;

export const getDataMilhojas = async () => {
  const payload = {
    method :'GET',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }

  try {
    const response = await fetch('http://localhost:8080/api/milhojas',payload)
    const data = response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
