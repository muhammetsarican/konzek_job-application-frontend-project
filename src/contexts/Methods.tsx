type ParseGroupTextType = {
    filterGroupText: any
}
const parseGroupText = (countries:any,{ filterGroupText }: ParseGroupTextType) => {
    let groupValues: string[] = [];
    countries.map((country:any) => {
        if (groupValues.length == 0 || Boolean(groupValues.find((value: string) => value != country[filterGroupText]))) {
            groupValues = [...groupValues, country[filterGroupText]];
        }
    })

    return groupValues.filter((value: any, index: any, array: any) => array.indexOf(value) === index);
}
export {
    parseGroupText,
}