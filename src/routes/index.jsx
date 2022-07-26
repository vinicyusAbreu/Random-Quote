import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/:id" element={<Quote />} />
    </Routes>
)

export default Rotas;