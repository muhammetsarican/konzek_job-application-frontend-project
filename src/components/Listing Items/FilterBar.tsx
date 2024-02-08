import { useCountry } from "../../contexts/CountryContext"

export default function FilterBar(){
    let {setFilterNameText}=useCountry();

    const parseFilterText=(filterText:string)=>{
        if("search:".search(filterText) && filterText.length<"search:".length) return false;
        return filterText.substring("search:".length, filterText.length)
    }
    const filterChange=(e:any)=>{
        const searchText=parseFilterText(e.target.value);
        if(searchText){
            setFilterNameText(searchText);
        }
    }
    return (
        <div className="flex bg-[#dee] rounded-xl p-5 justify-start items-center gap-2">
            <label htmlFor="filter-countries" className="text-gray-800">Filter:</label>
            <input onChange={filterChange} type="text" name="filter-countries" id="filter-countries" className="rounded-md border p-2 bg-white shadow-lg w-full text-gray-700" placeholder="Enter your filter keyword"/>
        </div>
    )
}