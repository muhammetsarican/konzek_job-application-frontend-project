import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { client, LIST_COUNTRIES } from "./gql/getData"
import { useQuery } from '@apollo/client'
import ListBox from './components/Listing Items/ListBox'
import { useCountry } from './contexts/CountryContext'

function App() {
  const [count, setCount] = useState(0);
  const {setCountries}=useCountry();
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) return (
    <p>An error occured!</p>
  )
  setCountries(data);

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className=''>Vite + React</h1>
      <div className="card">
        <ListBox/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
