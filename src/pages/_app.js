import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import store from '../app/store';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider profileUrl="http://localhost:3000/Auth0Data/Auth0Data">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    </UserProvider>

  )
}
