import { handleAuth } from '@auth0/nextjs-auth0';

// export default handleAuth();

const afterCallback = (req, res, session, state) => {
  // Validar la URL de redirección
  const allowedRedirectUrls = [
    'http://localhost:3000/Auth0Data/Auth0Data',
    // Agrega aquí otras URLs permitidas si las necesitas
  ];

  const { redirectTo } = state;
  if (!allowedRedirectUrls.includes(redirectTo)) {
    // Redirigir a una URL predeterminada en caso de que la URL no sea válida
    return res.redirect('http://localhost:3000/Auth0Data/Auth0Data'); // Cambia esta URL a la que desees
  }

  // Redirigir a la URL de redirección válida
  return res.redirect(redirectTo);
};

export default handleAuth({
  async afterCallback(req, res, session, state) {
    return afterCallback(req, res, session, state);
  },
});
