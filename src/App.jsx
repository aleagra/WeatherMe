import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';
import WeatherContextProvider from './components/context/WeatherContext';
import WeekWeather from './components/Home/WeekWeather';

function App() {
    return (
        <WeatherContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/week" element={<WeekWeather />}></Route>
                </Routes>
            </BrowserRouter>
        </WeatherContextProvider>
    );
}

export default App;
