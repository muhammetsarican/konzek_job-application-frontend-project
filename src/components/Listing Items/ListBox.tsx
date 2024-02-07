export default function ListBox({ data }: any) {
    console.log(data);
    return (
        <div className="border rounded-3xl p-5 bg-white">
            {
                data.countries.map((country: any) => (
                    <div key={country.code} className="flex gap-4 shadow-lg p-2 bg-white text-black m-2">
                        <p>{country.emoji}</p>
                        <h3>{country.name}</h3>
                        <h3>{country.native}</h3>
                        <h3>{country.capital}</h3>
                        <h3>{country.currency}</h3>
                        <h3>{country.languages[0].name}</h3>
                    </div>
                ))
            }
        </div>
    )
}