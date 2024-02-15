import { useEffect, useState } from 'react'
import { useCountry } from './contexts/CountryContext'
import InfoBar from './components/Info Bar/InfoBar'
import FilterBar from './components/Filter Bar/FilterBar'
import ListGroup from './components/Listing Items/ListGroup'

function App() {
  const { loading, error } = useCountry();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    console.log("app comp mounted");
    setIsMounted(true);
  }, []);

  console.log("app comp rendered");

  if (!isMounted) return null;
  if (loading) {
    return (
      <p className='text-3xl'>Loading...</p>
    )
  }
  if (error) return (
    <p className='text-3xl'>{error.message}</p>
  )
  return (
    <div className="container-fluid flex justify-center">
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <InfoBar />
        </div>
        <div className="my-5">
          <FilterBar />
        </div>
        <div className="my-5">
          <ListGroup />
        </div>
        <p className="text-[#555]">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App;
