import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterBar from './components/Listing Items/FilterBar'
import ListGroup from './components/Listing Items/ListGroup'
import { useEffect, useState } from 'react'
import { useCountry } from './contexts/CountryContext'

function App() {
  const {loading, error}=useCountry();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    console.log("app comp mounted");
    setIsMounted(true);
  }, []);

  console.log("app comp rendered");

  if (!isMounted) return null;
  if (loading){
     return (
    <p>Loading...</p>
  )}
  if(error) return(
    <p>{error.message}</p>
  )
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
        <ListGroup />
      </div>
      <p className="text-[#555]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
