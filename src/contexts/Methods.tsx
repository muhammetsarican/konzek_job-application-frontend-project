type ParseGroupTextType = {
    countries: Array<any>,
    filterGroupText: any
}
const parseGroupText = ({ countries, filterGroupText }: ParseGroupTextType) => {
    let groupValues: string[] = [];
    countries.map((country) => {
        if (groupValues.length == 0 || Boolean(groupValues.find((value: string) => value != country[filterGroupText]))) {
            groupValues = [...groupValues, country[filterGroupText]];
        }
    })

    return groupValues.filter((value: any, index: any, array: any) => array.indexOf(value) === index);
}
export {
    parseGroupText,
}