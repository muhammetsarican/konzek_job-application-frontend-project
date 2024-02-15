const CountrySchema = (country: any) => {
    return {
        continent_name: country.continent.name,
        name: country.name,
        code: country.code,
        native: country.native,
        capital: country.capital,
        emoji: country.emoji,
        currency: country.currency,
        phone: country.phone,
        aws_region: country.awsRegion,
        language_name: country.languages.length!=0? country.languages[0].name : null,
    }
}
const ConvertCountry = (countries: Array<object>) => {
    let newCountries: Array<object> = [];
    countries.map((country: object) => {
        newCountries.push(CountrySchema(country));
    })

    return newCountries;
}

export default ConvertCountry;