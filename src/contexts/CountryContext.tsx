import { createContext, useContext, useEffect, useState } from "react";
import { parseGroupText } from "./Methods";
import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "../gql/GetData";
import { ConvertCountry } from "../schema/CountrySchema";

type CountryContextType = {
    countries: Array<object>
    setCountries(value: Array<any>): void
    filterNameText: string
    setFilterNameText(value: string): void
    filterGroupText: string
    setFilterGroupText(value: string): void
    countriesGroupValues: Array<string>
    setCountriesGroupValues(value: Array<string>): void

    loading: boolean
    error: any

    getCountries(): any
}

const CountryContext = createContext<CountryContextType>({
    countries: [],
    setCountries: () => { },
    filterNameText: "",
    setFilterNameText: () => { },
    filterGroupText: "",
    setFilterGroupText: () => { },
    countriesGroupValues: [],
    setCountriesGroupValues: () => { },

    loading: true,
    error: {},

    getCountries: () => { },
});

const CountryProvider = ({ children }: any) => {
    // Hooks
    const [countries, setCountries] = useState<Array<object>>([]);
    const { loading, error } = useQuery(LIST_COUNTRIES, {
        onCompleted: (data) => {
            setCountries(ConvertCountry(data.countries));
        }
    });
    const [filterNameText, setFilterNameText] = useState("");
    const [filterGroupText, setFilterGroupText] = useState("");
    const [countriesGroupValues, setCountriesGroupValues] = useState<Array<string>>([]);

    useEffect(() => {
        getCountries();
        if (filterGroupText) {
            const groupValues = parseGroupText(getCountries(), { filterGroupText });

            setCountriesGroupValues(groupValues);
        }
        else setCountriesGroupValues([]);
    }, [filterNameText, filterGroupText]);
    
    // Methods
    const getCountries = ():Array<object> => {
        if (filterNameText.length > 0) {
            return countries.filter((country: any) => country.name.includes(filterNameText));
        }
        return countries;
    }

    // Variables
    const values = {
        countries,
        setCountries,
        filterNameText,
        setFilterNameText,
        filterGroupText,
        setFilterGroupText,
        countriesGroupValues,
        setCountriesGroupValues,

        loading,
        error,

        getCountries,
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