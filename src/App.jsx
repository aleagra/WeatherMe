import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, WeekWeather } from './pages';
import WeatherContextProvider from './context/WeatherContext';

function App() {
    return (
        <WeatherContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/week" element={<WeekWeather />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                </Routes>
            </BrowserRouter>
        </WeatherContextProvider>
    );
}

export default App;
