const CountrySchema = (country:any|null):object => {
    return {
        continent_name: country?country.continent.name:null,
        name: country?country.name:null,
        code: country?country.code:null,
        native: country?country.native:null,
        capital: country?country.capital:null,
        emoji: country?country.emoji:null,
        currency: country?country.currency:null,
        phone: country?country.phone:null,
        aws_region: country?country.awsRegion:null,
        language_name: country?country.languages.length!=0? country.languages[0].name : null:null,
    }
}
const ConvertCountry = (countries: Array<object>):Array<object> => {
    let newCountries: Array<object> = [];
    countries.map((country: object) => {
        newCountries.push(CountrySchema(country));
    })

    return newCountries;
}

export {
    ConvertCountry,
    CountrySchema
};