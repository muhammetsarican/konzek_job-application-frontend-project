import { useCountry } from "../../contexts/CountryContext";
import ListBox from "./ListBox";

export default function ListGroup() {
    const { countriesGroupValues } = useCountry();
    return (
        <div>
            {
                countriesGroupValues.length != 0 && countriesGroupValues.map((groupValue: string, index: number) =>
                    <ListBox groupValue={groupValue} key={index} />
                )
            }
            {
                <ListBox groupValue={null}/>
            }
        </div>
    )
}