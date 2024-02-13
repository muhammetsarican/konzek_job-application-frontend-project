import { memo, useEffect, useState } from "react";

interface ListItemInterface {
    country: any;
    counter: number
}

function ListItem({ country, counter }: ListItemInterface) {
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
        setTimeout(() => {
            if (counter == 10) {
                setIsObjectSelected(true);
            }
        }, 3000);
    }, [])
    if (!isMounted) return null;
    return (
        <div key={country.code} onClick={selectOrUnselectItem} className={`grid grid-cols-1 gap-3 p-3 justify-center max-w-[200px] shadow-lg p-2 text-black m-5 rounded-md ${isObjectSelected ? checkedBoxColor + " border-4 border-white p-1" : "bg-white"}`}>
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