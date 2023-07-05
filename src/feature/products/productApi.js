const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const BASE = 'http://localhost:8080/api/milhojas'

export const getDataMilhojas = async () => {
  const payload = {
    method :'GET',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }

  try {
    const response = await fetch(`${BASE}`,payload)
    const data = response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDataMilhojasFilter = async (filters) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),

  };
  const url = filters
    ? `${BASE}/filter?taste=${filters.taste}&size=${filters.size}`
    : `${BASE}`;
  try {
    const response = await fetch(url, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
