import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import GlobalStyle from "./styles/GlobalStyles"
import QuoteProvider from "./contexts/quote"

const App = () => (
  <QuoteProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  </QuoteProvider>

)

export default App
