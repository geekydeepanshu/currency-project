import { useState,useEffect } from "react";

function useCurrencyInformation(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => {
                return response.json()
            }).then((response) => {
                setData(response[currency]);
            }).catch((error) => {
                alert(error)
            })
    }, [currency])
    return data;
}

export default useCurrencyInformation;