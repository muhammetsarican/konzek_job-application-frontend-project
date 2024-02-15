import { CountrySchema } from "../schema/CountrySchema";

type ParseGroupTextType = {
    filterGroupText: any
}
const parseGroupText = (countries:any,{ filterGroupText }: ParseGroupTextType):Array<string> => {
    let groupValues: string[] = [];
    countries.map((country:any) => {
        if (groupValues.length == 0 || Boolean(groupValues.find((value: string) => value != country[filterGroupText]))) {
            groupValues = [...groupValues, country[filterGroupText]];
        }
    })

    return groupValues.filter((value: any, index: any, array: any) => array.indexOf(value) === index);
}

const capitalize=(text:string):string=>text.charAt(0).toUpperCase()+text.slice(1);

const checkGroupValue=(groupString:string):boolean=>Object.keys(CountrySchema(null)).includes(groupString);

export {
    parseGroupText,
    capitalize,
    checkGroupValue
}