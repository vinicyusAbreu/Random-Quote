import axios from "axios";
import { useState, createContext, useEffect } from "react";
export const QuoteContext = createContext({});

const url = "https://quote-garden.herokuapp.com/api/v3/quotes"
const QuoteProvider = ({ children }) => {
    const [quote, setQuote] = useState([]);
    const [allText, setAllText] = useState([]);
    const [loading, setLoading] = useState(false);

    const randomQuote = () => {
        setLoading(true);
        axios.get(`${url}/random`)
            .then(res => {
                setQuote(res.data["data"])
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        setLoading(true);
        let timer = setTimeout(() => {
            randomQuote();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const getAllText = (value) => {
        setLoading(true);
        axios.get(`${url}?author=${value}`)
            .then(res => {
                setAllText(res.data["data"]);
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <QuoteContext.Provider value={{ quote, randomQuote, getAllText, allText, loading, setLoading }}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteProvider;