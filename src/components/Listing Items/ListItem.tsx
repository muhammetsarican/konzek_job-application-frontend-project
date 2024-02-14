import { memo, useEffect, useState } from "react";

interface ListItemInterface {
    country: any;
    counter: number;
    getCounter():number;
}

function ListItem({ country, counter, getCounter }: ListItemInterface) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    const [isObjectSelected, setIsObjectSelected] = useState(false);
    const checkedBoxColor = "bg-red-100";

    const selectOrUnselectItem = () => {
        setIsObjectSelected(!isObjectSelected);
    }

    useEffect(() => {
        setIsObjectSelected(false);
        setTimeout(() => {
            console.log(getCounter());
            if (counter == 10 || counter<10 && counter==getCounter()) {
                setIsObjectSelected(true);
            }
        }, 3000);
    }, [getCounter()])
    if (!isMounted) return null;
    return (
        <div key={country.code} onClick={selectOrUnselectItem} className={`grid grid-cols-1 gap-3 justify-center shadow-lg text-black m-5 rounded-md ${isObjectSelected ? checkedBoxColor + " border-4 border-white p-1" : "bg-white p-2"}`}>
            <p className="w-full text-xs"><b>Number: </b>{counter}</p>
            <p className="w-full text-xs"><b>Flag: </b>{country.emoji}</p>
            <h3 className="self-start text-xs"><b>Name: </b>{country.name}</h3>
            <h3 className="self-start text-xs"><b>Native: </b>{country.native}</h3>
            <h3 className="self-start text-xs"><b>Capital: </b>{country.capital}</h3>
            <h3 className="self-start text-xs"><b>Currency: </b>{country.currency}</h3>
            {/* <h3>{country.languages[0].name}</h3> */}
        </div>
    )
}

export default memo(ListItem);