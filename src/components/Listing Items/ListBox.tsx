import { useCountry } from "../../contexts/CountryContext";
import ListItem from "./ListItem";

export default function ListBox() {
    const {getCountries}=useCountry();
    // console.log(getCountries);
    return (
        <div className="border rounded-3xl p-5 bg-[#dee]">
            {
                getCountries().map((country: any) => (
                    <ListItem country={country}/>
                ))
            }
        </div>
    )
}