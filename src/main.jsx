import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { FirebaseAppProvider } from 'reactfire'
import app from '../firebaseconfig'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_API_RM 
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseAppProvider firebaseConfig={app} >
      <Suspense fallback={<span>cargando...</span>} >
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Suspense>
  </FirebaseAppProvider>,
)
