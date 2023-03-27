import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';
import WeatherContextProvider  from './components/context/WeatherContext';

function App() {
    return (
        
        <WeatherContextProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
        </WeatherContextProvider>
    );
}

export default App;
