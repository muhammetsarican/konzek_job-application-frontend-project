import { useCountry } from "../../contexts/CountryContext";
import ListGroup from "./ListGroup";

export default function ListBox() {
    const {getCountries, filterGroupText}=useCountry();
    // console.log(getCountries);
    return (
        <div className="border rounded-3xl p-5 bg-[#dee]">
            {
                getCountries().map((country: any) => {
                    return(
                    <ListGroup country={country}/>
                )})
            }
        </div>
    )
}