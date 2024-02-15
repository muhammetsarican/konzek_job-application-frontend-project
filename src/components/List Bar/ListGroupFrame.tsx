import { useCountry } from "../../contexts/CountryContext";
import { capitalize } from "../../contexts/Methods";

const ListGroupFrame = ({ children, props }: any) => {
    const { filterGroupText } = useCountry();

    return (
        <div className={`p-5 bg-[#def] my-5 rounded-md ${props.isChildExist ? "block" : "hidden"}`}>
            <label className={`text-gray-700 text-center text-xs py-2 mb-3 border-2 border-gray-500 rounded-lg bg-[#dee] block`}>
                {props.groupValue ? capitalize(filterGroupText) + ": " + props.groupValue : "Group: All"}
            </label>
            <div className="grid grid-cols-5 gap-1">
                {children}
            </div>
        </div>
    )

}
export default ListGroupFrame;