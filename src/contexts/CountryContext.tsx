import { createContext, useContext, useEffect, useState } from "react";

type CountryContextType = {
    countries: any
    setCountries(value: any): void
    filterNameText: string
    setFilterNameText(value: string): void
    filterGroupText: string
    setFilterGroupText(value: string): void

    getCountries(): any
}

const CountryContext = createContext<CountryContextType>({
    countries: [],
    setCountries: () => { },
    filterNameText: "",
    setFilterNameText: () => { },
    filterGroupText: "",
    setFilterGroupText: () => { },

    getCountries: () => { },
});

const CountryProvider = ({ children }: any) => {
    const [countries, setCountries] = useState([]);
    const [filterNameText, setFilterNameText] = useState("");
    const [filterGroupText, setFilterGroupText] = useState("");

    const getCountries = () => {
        if (filterNameText) {
            return countries.filter((country: any) => country.name.includes(filterNameText));
        }
        return countries;
    }

    useEffect(() => {
        getCountries();
    }, [filterNameText, filterGroupText]);

    const values = {
        countries,
        setCountries,
        filterNameText,
        setFilterNameText,
        getCountries,
        filterGroupText,
        setFilterGroupText
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