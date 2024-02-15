import { useCountry } from "../../contexts/CountryContext";
import { capitalize, checkGroupValue } from "../../contexts/Methods";

export default function FilterBar() {
    // Hooks
    const { setFilterNameText, setFilterGroupText } = useCountry();

    // Methods
    const parseFilterText = (filterText: string):Array<string|undefined>|boolean => {
        let groupString;
        let searchString;
        const isGroupStringExist = filterText.toLowerCase().search("group:");
        const isSearchStringExist = filterText.toLowerCase().search("search:");

        if (isGroupStringExist == -1 && isSearchStringExist == -1) return false;

        if (isGroupStringExist != -1) groupString = filterText.substring(isGroupStringExist, filterText.length);

        if (isSearchStringExist != -1) searchString = filterText.substring(0, isGroupStringExist != -1 ? isGroupStringExist : filterText.length);

        return [searchString?.toLowerCase(), groupString?.toLowerCase()]
    }
    const filterChange = (e: any):void => {
        let filterTexts: any = parseFilterText(e.target.value);

        const searchText = filterTexts[0] ? filterTexts[0].split(":")[1].trim() : null;
        const groupText = filterTexts[1] ? filterTexts[1].split(":")[1].trim() : null;

        if (searchText != null && searchText.length != 0) {
            setFilterNameText(capitalize(searchText));
        } else {
            setFilterNameText("");
        }

        if (groupText != null && groupText.length != 0 && checkGroupValue(groupText)) {
            setFilterGroupText(groupText);
        } else {
            setFilterGroupText("");
        }
    }
    const clearText=(event:any):void=>{
        event.target.value=""
    }
    return (
        <div className="flex bg-[#dee] rounded-md p-5 justify-start items-center gap-2">
            <label htmlFor="filter-countries" className="text-gray-800">Filter:</label>
            <input onChange={filterChange} onClick={clearText} type="text" name="filter-countries" id="filter-countries" className="rounded-md border p-2 bg-white shadow-lg w-full text-gray-700" placeholder="Enter your filter keyword" />
        </div>
    )
}