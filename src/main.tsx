import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CountryProvider } from './contexts/CountryContext.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './gql/getData.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <CountryProvider>
          <App />
        </CountryProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
