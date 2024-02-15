import ClipboardJS from "clipboard";
import { memo } from "react"
import GroupBox from "./ExampleList/ExampleGroupBox";
import FilterBox from "./ExampleList/ExampleFilterBox";

new ClipboardJS('.copy-text');

const InfoBar = () => {
    return (
        <div className="bg-white text-black p-5 rounded-md w-full flex flex-col gap-3 text-start">
            <h3 className="text-5xl text-center border-b-2 border-gray-300 pb-5">Konzek Job Application Project</h3>
            <p className="text-xl font-bold">Information:</p>
            <p className="">This project made with using React, GraphQL, Tailwind.</p>
            <p className="text-xs">All articles that given at the document, completed and all operations working.<br /><br />In this project, countries data got from open source trevorblades api with GraphQL api. This api was become useful data with Apollo Server for React app. After this transaction, the data was appointed to a variable that contains in country context because of app needs to reach this data from all child components. If context wasn't created, app childs needs to reach this data with props.<br /><br />Filtering part is contains much functions in it. Firstly, the search operation was done with filter method and the data was filtered by name field. Secondly, at grouping operation, string operations was made and various string methods used. Maybe it is the operation where string operations are used the most. Grouping operation working as like this, first the words that entered to the input gets from user. After that, the data be filters by this field, after filtering, the values appoints to the new array. Finally, if the data has this value, it lists at main screen.<br /><br />If the list have country more than 10, the 10. item will be selected, if less than 10, the last item of list will be selected after 2 seconds.</p>

            <hr />            
            <h5>Input Text Examples:</h5>
            <ul className="flex flex-wrap">
                <FilterBox text="SEARCH:TURKEYGROUP:CONTINENT_NAME" />
                <FilterBox text="Search:T Group:continent_name" />
                <FilterBox text="Search:Turkey" />
                <FilterBox text="Search:t" />
                <FilterBox text="Group:Continent_name" />
            </ul>
            <p className="text-[0.6rem] underline"><b>Note: </b>You can use filter as upper or lower case. Or you can create filters as you wish. When you click the input field, the text will be cleared as automatically. Don't worry if items don't appear when you enter the group key, all items will be shown after entering ':'.</p>
            <hr />
            <h5>Grouping Fields:</h5>
            <ul className="flex">
                <GroupBox text="continent_name" />
                <GroupBox text="name" />
                <GroupBox text="code" />
                <GroupBox text="native" />
                <GroupBox text="capital" />
                <GroupBox text="emoji" />
                <GroupBox text="currency" />
                <GroupBox text="phone" />
                <GroupBox text="language_name" />
                <GroupBox text="aws_region" />
            </ul>
            <p className="text-[0.6rem] underline"><b>Note: </b>All fields listing below, you can use them as lower or upper case. But if you want to create own filter you have to add 'group:' at head of field and you can not change the field format. Finally, the method filters the data after the field name has been entered completely.</p>
            <hr />
            <p className="text-sm">Have fun!</p>
        </div>
    )
}

export default memo(InfoBar);