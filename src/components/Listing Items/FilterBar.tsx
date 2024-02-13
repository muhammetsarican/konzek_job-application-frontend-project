import { useCountry } from "../../contexts/CountryContext"

export default function FilterBar() {
    const { setFilterNameText, setFilterGroupText } = useCountry();

    const parseFilterText = (filterText: string) => {
        let groupString;
        let searchString = "";
        const isGroupStringExist = filterText.toLowerCase().search("group:");
        const isSearchStringExist = filterText.toLowerCase().search("search:");

        if (isGroupStringExist == -1 && isSearchStringExist == -1) return false;

        if (isGroupStringExist != -1) groupString = filterText.substring(isGroupStringExist, filterText.length);

        if (isSearchStringExist != -1) searchString = filterText.substring(0, isGroupStringExist != -1 ? isGroupStringExist : filterText.length);

        return [searchString.toLowerCase(), groupString?.toLowerCase()]
    }
    const filterChange = (e: any) => {
        let filterTexts: any = parseFilterText(e.target.value);

        const searchText = filterTexts[0] ? filterTexts[0].split(":")[1].trim() : null;
        const groupText = filterTexts[1] ? filterTexts[1].split(":")[1].trim() : null;

        if (searchText != null && searchText.length != 0) {
            console.log(searchText);
            setFilterNameText(searchText);
        } else {
            setFilterNameText("");
        }

        if (groupText != null && groupText.length != 0) {
            setFilterGroupText(groupText);
        } else {
            setFilterGroupText("");
        }
    }
    return (
        <div className="flex bg-[#dee] rounded-xl p-5 justify-start items-center gap-2">
            <label htmlFor="filter-countries" className="text-gray-800">Filter:</label>
            <input onChange={filterChange} type="text" name="filter-countries" id="filter-countries" className="rounded-md border p-2 bg-white shadow-lg w-full text-gray-700" placeholder="Enter your filter keyword" />
        </div>
    )
}