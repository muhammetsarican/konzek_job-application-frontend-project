import { useCountry } from "../../contexts/CountryContext";
import ListItem from "./ListItem";

export default function ListBox() {
    const {countries}=useCountry();
    console.log(countries);
    return (
        <div className="border rounded-3xl p-5 bg-white">
            {
                countries.countries.map((country: any) => (
                    <ListItem country={country}/>
                ))
            }
        </div>
    )
}