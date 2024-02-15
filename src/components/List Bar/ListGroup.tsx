import { memo, useEffect, useState } from "react";
import { useCountry } from "../../contexts/CountryContext";
import ListItem from "./ListItem";
import ListGroupFrame from "./ListGroupFrame";

function ListGroup() {
    // Hooks
    const [isMounted, setIsMounted] = useState(false);
    const [isChildExist, setIsChildExist] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const { countriesGroupValues, getCountries, filterGroupText } = useCountry();

    // Variables
    let counter = 0;

    // Methods
    const setCounter = (count: number):number => {
        return counter += count;
    };

    const getCounter = ():number => counter;

    // Conditions
    if (!isMounted) return null;

    return (
        <div>
            {
                countriesGroupValues.length != 0 && countriesGroupValues.map((groupValue: string, index: number) => {
                    return (
                        <ListGroupFrame props={{ isChildExist, groupValue }} key={index}>
                            {
                                getCountries().map((country: any, index: number) => {
                                    if (groupValue != null && country[filterGroupText] == groupValue) {
                                        if (isChildExist == false) {
                                            setIsChildExist(true)
                                        };

                                        return (
                                            <ListItem country={country} key={index} counter={setCounter(1)} getCounter={getCounter} />
                                        )
                                    }
                                })
                            }
                        </ListGroupFrame>
                    )
                })
            }
            {
                countriesGroupValues.length == 0 && (
                    <ListGroupFrame props={{ isChildExist: true, groupValues: null }}>
                        {
                            getCountries().map((country: object, index: number) =>
                                <ListItem country={country} key={index} counter={setCounter(1)} getCounter={getCounter} />
                            )
                        }
                    </ListGroupFrame>
                )
            }

        </div>
    )
}

export default memo(ListGroup);