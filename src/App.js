import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Flights from './pages/Flights';
import Seats from './pages/Seats';
import Confirmation from './pages/Confirmation';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <div>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/seats/:flightId" element={<Seats />} />
                    <Route path="/confirmation" element={<Confirmation />} /> 
                    <Route path="/dashboard" element={<Dashboard />} /> 
                </Routes>
            </div>
            </div>
    );
};

export default App;
