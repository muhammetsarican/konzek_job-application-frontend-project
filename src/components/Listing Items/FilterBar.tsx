import { useCountry } from "../../contexts/CountryContext"

export default function FilterBar() {
    const { setFilterNameText, setFilterGroupText } = useCountry();

    const parseFilterText = (filterText: string) => {
        let groupString = "";
        let searchString = "";
        const isGroupStringExist = filterText.search("Group:");
        const isSearchStringExist = filterText.search("Group:");

        if (isGroupStringExist == -1 && isSearchStringExist == -1) return false;

        if (isGroupStringExist != -1) groupString = filterText.substring(isGroupStringExist, filterText.length);

        if (isSearchStringExist != -1) searchString = filterText.substring(0, isSearchStringExist);

        return [searchString, groupString]
    }
    const filterChange = (e: any) => {
        let filterTexts:any = parseFilterText(e.target.value);

        const searchText=filterTexts[0].split(":")[1].trim();
        const groupText=filterTexts[1].split(":")[1].trim();

        if (searchText!=0) {
            setFilterNameText(searchText);
        }
        
        if (groupText!=0) {
            setFilterGroupText(groupText);
        }
    }
    return (
        <div className="flex bg-[#dee] rounded-xl p-5 justify-start items-center gap-2">
            <label htmlFor="filter-countries" className="text-gray-800">Filter:</label>
            <input onChange={filterChange} type="text" name="filter-countries" id="filter-countries" className="rounded-md border p-2 bg-white shadow-lg w-full text-gray-700" placeholder="Enter your filter keyword" />
        </div>
    )
}