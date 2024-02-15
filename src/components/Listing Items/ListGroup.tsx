import { memo, useEffect, useState } from "react";
import { useCountry } from "../../contexts/CountryContext";
import ListItem from "./ListItem";

function ListGroup() {
    const [isMounted, setIsMounted] = useState(false);
    const [isChildExist, setIsChildExist] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    const { countriesGroupValues, getCountries, filterGroupText } = useCountry();
    let counter = 0;

    const setCounter = (count: number) => {
        return counter += count;
    };

    const getCounter = () => counter;

    if (!isMounted) return null;

    return (
        <div>
            {
                countriesGroupValues.length != 0 && countriesGroupValues.map((groupValue: string, index: number) => {
                    return (
                        <div className={`p-5 bg-[#def] my-5 rounded-md ${isChildExist ? "block" : "hidden"}`} key={index}>
                            <label className={`text-gray-700 text-center text-xs py-2 mb-3 border-2 border-gray-500 rounded-lg bg-[#dee] ${filterGroupText ? "block" : "hidden"}`}>{filterGroupText.charAt(0).toUpperCase() + filterGroupText.slice(1) + ": " + groupValue}</label>
                            <div className="grid grid-cols-5 gap-1">
                                {getCountries().map((country: any, index: number) => {
                                    if (groupValue != null && country[filterGroupText] == groupValue) {
                                        if (isChildExist == false) {
                                            setIsChildExist(true)
                                        };
                                        return (
                                            //<div className="border rounded-3xl p-5 bg-[#dee] shadow-xl m-2" key={country.code}>
                                            <ListItem country={country} key={index} counter={setCounter(1)} getCounter={getCounter} />
                                            //</div>
                                        )
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    )
                })
            }
            {
                countriesGroupValues.length == 0 && (
                    <div className={`p-2 bg-[#def] my-5 rounded-md`}>
                        <label className={`text-gray-700 text-center text-xs py-2 mb-3 border-2 border-gray-500 rounded-lg bg-[#dee] block`}>Group: All</label>
                        <div className="grid grid-cols-5 gap-1">
                            {
                                getCountries().map((country: object, index: number) =>
                                    <ListItem country={country} key={index} counter={setCounter(1)} getCounter={getCounter} />
                                )
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default memo(ListGroup);