const BASE = 'http://localhost:8080/api'

export const createUser = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(`${BASE}/users`, options);
  const result = await res.json();

  return result;
}
