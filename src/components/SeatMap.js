import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatMap = ({ flightId, token }) => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            const response = await axios.get(`http://localhost:8080/api/seats/flight/${flightId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSeats(response.data);
        };

        fetchSeats();
    }, [flightId, token]);

    const handleSeatClick = async (seatId) => {
        try {
            await axios.post(
                'http://localhost:8080/api/reservations',
                {
                    seat: { id: seatId },
                    flight: { id: flightId },
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Seat reserved!');
        } catch (error) {
            console.error('Error reserving seat', error);
        }
    };

    return (
        <div>
            <h1>Seat Map</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '10px' }}>
                {seats.map((seat) => (
                    <button
                        key={seat.id}
                        style={{ backgroundColor: seat.status === 'RESERVED' ? 'red' : 'green' }}
                        onClick={() => handleSeatClick(seat.id)}
                        disabled={seat.status === 'RESERVED'}
                    >
                        {seat.seatNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SeatMap;
