import { useContext } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Paragrafo from "../../components/Paragrafo";
import Button from "./style";
import { QuoteContext } from "../../contexts/quote";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Home = () => {
    const { quote, loading } = useContext(QuoteContext);
    return (
        <>
            <Header />
            <Container>
                {loading && <Loading />}
                {!loading && quote.length > 0 && (
                    <>
                        <Paragrafo >
                            {
                                quote[0].quoteText
                            }
                        </Paragrafo>
                        <Button to={`/quote/${quote[0].quoteAuthor}`}>
                            <div className="flex">
                                <span className="autor">
                                    {quote[0].quoteAuthor}
                                </span>
                                <span className="genero">{quote.length && quote[0].quoteGenre}
                                </span>
                            </div>

                            <FaLongArrowAltRight size={25} color="#FFF" />

                        </Button>
                    </>
                )}

            </Container>
        </>

    )
}

export default Home;