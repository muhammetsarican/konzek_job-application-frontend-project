import ListItem from "./ListItem";

export default function ListGroup({country}:any){
    return (
        <div>
            <ListItem country={country} />
        </div>
    )
}