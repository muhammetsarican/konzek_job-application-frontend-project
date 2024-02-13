import { createContext, useContext, useEffect, useState } from "react";
import { parseGroupText } from "./Methods";
import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "../gql/getData";

type CountryContextType = {
    countries: Array<any>
    setCountries(value: Array<any>): void
    filterNameText: string
    setFilterNameText(value: string): void
    filterGroupText: string
    setFilterGroupText(value: string): void
    countriesGroupValues: Array<string>
    setCountriesGroupValues(value: Array<string>): void

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

    getCountries: () => { },
});

const CountryProvider = ({ children }: any) => {
    const [countries, setCountries] = useState<Array<any>>([]);
    const {} = useQuery(LIST_COUNTRIES, {
        onCompleted: (data) => {
            setCountries(data.countries);
        }
    });
    const [filterNameText, setFilterNameText] = useState("");
    const [filterGroupText, setFilterGroupText] = useState("");
    const [countriesGroupValues, setCountriesGroupValues] = useState<Array<string>>([]);

    const getCountries = () => {
        if (filterNameText.length > 0) {
            return countries.filter((country: any) => country.name.includes(filterNameText));
        }
        return countries;
    }

    useEffect(() => {
        getCountries();
    }, [filterNameText, filterGroupText]);

    useEffect(() => {
        const groupValues = parseGroupText({ countries, filterGroupText });

        setCountriesGroupValues(groupValues);
    }, [filterGroupText]);

    const values = {
        countries,
        setCountries,
        filterNameText,
        setFilterNameText,
        filterGroupText,
        setFilterGroupText,
        countriesGroupValues,
        setCountriesGroupValues,

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