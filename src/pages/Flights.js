import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Flights.css';  // Stiller için ayrı bir CSS dosyası

const Flights = () => {

    const [flights, setFlights] = useState([]);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        if (token) {
            window.console.log("token that came to flight", token);
            axios.get('http://localhost:8080/api/flights', {
                headers: { 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
             }
            }).then(response => {
                setFlights(response.data);
            }).catch(error => {
                console.error('Error fetching flights', error);
            });
        }
    }, [token]);

    return (
        <div className="flights-container">
            <h2>Delhi to Sydney</h2>
            <table>
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>Departure</th>
                        <th>Duration</th>
                        <th>Arrival</th>
                        <th>Price</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        <tr key={index}>
                            <td>{flight.airline}</td>
                            <td>{flight.departure}</td>
                            <td>{flight.duration}</td>
                            <td>{flight.arrival}</td>
                            <td>${flight.price}</td>
                            <td><button className="book-button">Book</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Flights;
