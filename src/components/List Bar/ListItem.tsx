import { memo, useEffect, useState } from "react";

interface ListItemInterface {
    country: any;
    counter: number;
    getCounter():number;
}

function ListItem({ country, counter, getCounter }: ListItemInterface) {
    // Hooks
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    const [isObjectSelected, setIsObjectSelected] = useState(false);
    
    useEffect(() => {
        setIsObjectSelected(false);
        setTimeout(() => {
            if (counter == 10 || counter<10 && counter==getCounter()) {
                setIsObjectSelected(true);
            }
        }, 3000);
    }, [getCounter()])

    // Variables
    const checkedBoxColor = 'bg-[#F67400]';

    // Methods
    const selectOrUnselectItem = ():void => {
        setIsObjectSelected(!isObjectSelected);
    }

    if (!isMounted) return null;
    return (
        <div key={country.code} onClick={selectOrUnselectItem} className={`grid grid-cols-1 gap-3 justify-center shadow-lg text-black m-3 rounded-md ${isObjectSelected ? `${checkedBoxColor} text-white border-4 border-white p-1` : "bg-white p-2"}`}>
            <p className="w-full text-xs"><b>Number: </b>{counter}</p>
            <p className="w-full text-xs"><b>Continent: </b>{country.continent_name}</p>
            <p className="w-full text-xs"><b>Flag: </b>{country.emoji}</p>
            <h3 className="self-start text-xs"><b>Name: </b>{country.name}</h3>
            <h3 className="self-start text-xs"><b>Native: </b>{country.native}</h3>
            <h3 className="self-start text-xs"><b>Capital: </b>{country.capital}</h3>
            <h3 className="self-start text-xs"><b>Phone: </b>{country.phone}</h3>
            <h3 className="self-start text-xs"><b>Currency: </b>{country.currency}</h3>
            <h3 className="self-start text-xs"><b>Language: </b>{country.language_name}</h3>
            <h3 className="self-start text-xs"><b>Aws Region: </b>{country.aws_region}</h3>
        </div>
    )
}

export default memo(ListItem);