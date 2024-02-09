import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { client, LIST_COUNTRIES } from "./gql/getData"
import { useQuery } from '@apollo/client'
import ListBox from './components/Listing Items/ListBox'
import { useCountry } from './contexts/CountryContext'
import FilterBar from './components/Listing Items/FilterBar'

function App() {
  const { setCountries } = useCountry();
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) return (
    <p>An error occured!</p>
  )

  setCountries(data.countries);

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1 className=''>Vite + React</h1>
      <div className="filter-bar my-5">
        <FilterBar />
      </div>
      <div className="countries my-5">
        <ListBox />
      </div>
      <p className="text-[#555]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
