import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer2 from './components/Shimmer2';

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const PokemonDetails = React.lazy(() => import('./pages/PokemonDetails'))

const App = () => {
    return (
        <Suspense fallback={<div><Shimmer2 /></div>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App