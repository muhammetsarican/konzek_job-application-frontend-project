type ParseGroupTextType = {
    countries: Array<any>,
    filterGroupText: any
}
const parseGroupText = ({ countries, filterGroupText }: ParseGroupTextType) => {
    let groupValues: string[] = [];
    countries.map((country) => {
        if (groupValues.length == 0 || Boolean(groupValues.find((value: string) => value != country[filterGroupText]))) {
            console.log(groupValues.indexOf(filterGroupText));
            groupValues = [...groupValues, country[filterGroupText]];
        }
    })

    return groupValues.filter((value: any, index: any, array: any) => array.indexOf(value) === index);
}

type GetCountriesType={
    countries:Array<any>
    filterNameText:any
}
const getCountries:any = ({countries, filterNameText}:GetCountriesType) => {
    if (filterNameText) {
        return countries.filter((country: any) => country.name.includes(filterNameText));
    }
    return countries;
}
export {
    parseGroupText,
    getCountries
}