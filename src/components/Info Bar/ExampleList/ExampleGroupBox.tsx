import CopySvg from "./CopySvg";

const GroupBox = ({ text }: { text: string }) => {
    return (
        <li className="text-xs bg-gray-100 px-3 py-1 m-1 w-fit rounded-md shadow-md">{text}
            <span className="copy-text border-l border-gray-500 ps-2 ms-2" data-clipboard-text={`group:${text}`}>
                <CopySvg />
            </span>
        </li>
    )
}

export default GroupBox;