import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { QuoteContext } from '../../contexts/quote';
import Header from "../../components/Header";
import Main from "../../components/Container/style";
import Paragrafo from "../../components/Paragrafo";
import { Separator } from "./style";
import Loading from "../../components/Loading";


const Quote = () => {
    const { getAllText, allText, loading, setLoading } = useContext(QuoteContext);

    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        let timer = setTimeout(() => {
            getAllText(id)
        }, 1000);
        return () => clearTimeout(timer);
    }, [id])
    return (
        <>
            <Header />

            <Main>
                {loading && <Loading />}
                {!loading && allText.length > 0 && (
                    <Separator>
                        {
                            allText.map(quote => (
                                <Paragrafo key={quote._id}>
                                    {quote.quoteText}
                                </Paragrafo>

                            ))
                        }
                    </Separator>
                )}



            </Main>

        </>
    )
}

export default Quote;