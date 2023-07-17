const BASE = 'http://localhost:8080/api'
const logInURL = 'http://localhost:8080/auth/local/login'

export const createUser = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(`${BASE}/user`, options);
  const result = await res.json();

  return result;
}

export const logInUser = async(user) => {
  const payload = {
    method:'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }
  try {
    const res = await fetch(logInURL,payload);
    const responseUser = await res.json()

    if(responseUser?.token){
      localStorage.setItem('token',responseUser.token)

    }
    return responseUser
  } catch (error) {
    return error
  }

}
