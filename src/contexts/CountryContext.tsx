import { createContext, useContext, useState } from "react";


type CountryContextType = {
    countries: any
    setCountries(value: any): void
}

const CountryContext = createContext<CountryContextType>({
    countries:[],
    setCountries:()=>{}
});

const CountryProvider = ({ children }: any) => {
    const [countries, setCountries] = useState([]);

    const values = {
        countries,
        setCountries
    }
    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    )
}

const useCountry = () => useContext(CountryContext);

export {
    CountryProvider,
    useCountry
}