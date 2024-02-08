import { createContext, useContext, useEffect, useState } from "react";

type CountryContextType = {
    countries: any
    setCountries(value: any): void
    filterNameText: any
    setFilterNameText(value: any): void
    getCountries():any
}

const CountryContext = createContext<CountryContextType>({
    countries: [],
    setCountries: () => { },
    filterNameText: "",
    setFilterNameText: () => { },
    getCountries: ()=>{}
});

const CountryProvider = ({ children }: any) => {
    const [countries, setCountries] = useState([]);
    const [filterNameText, setFilterNameText] = useState("");

    const getCountries=()=>{
        if(filterNameText){
            return countries.filter((country: any) => country.name.includes(filterNameText));
        }
        return countries;
    }

    useEffect(() => {
        getCountries();
    }, [filterNameText]);

    const values = {
        countries,
        setCountries,
        filterNameText,
        setFilterNameText,
        getCountries
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