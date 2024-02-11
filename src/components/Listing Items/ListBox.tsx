import { useState } from "react";
import { useCountry } from "../../contexts/CountryContext";
import ListItem from "./ListItem";

interface ListBoxInterface {
    groupValue:string | null;
}
export default function ListBox({ groupValue }: ListBoxInterface) {
    const [isChildExist, setIsChildExist] = useState(false);

    const {
        getCountries,
        filterGroupText,
    } = useCountry();
    
    return (
        <div className={`p-2 bg-[#def] my-5 rounded-md ${isChildExist ? "block" : "hidden"}`}>
        <label className={`text-black text-start ${filterGroupText ? "block" : "hidden"}`}>{filterGroupText.charAt(0).toUpperCase() + filterGroupText.slice(1) + ": " + groupValue}</label>
        {
            getCountries().map((country: any) => {
        
                if (groupValue==null || country[filterGroupText] == groupValue) {
                    if(isChildExist==false) {
                        setIsChildExist(true)
                    };
                    return(
                        //<div className="border rounded-3xl p-5 bg-[#dee] shadow-xl m-2" key={country.code}>
                        <ListItem country={country} key={country.code}/>
                        //</div>
                    )
                }
            })
        }
    </div>
    )
}