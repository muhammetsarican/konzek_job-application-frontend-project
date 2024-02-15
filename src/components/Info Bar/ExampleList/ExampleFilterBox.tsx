import CopySvg from "./CopySvg";

const FilterBox = ({ text }: { text: string }) => {
    return (
        <li className="text-xs px-3 py-1 m-1 bg-gray-100 rounded-md w-fit shadow-md">{text}
            <span className="copy-text border-l border-gray-500 ps-2 ms-2" data-clipboard-text={`${text}`}>
                <CopySvg />
            </span>
        </li>
    )
}

export default FilterBox;