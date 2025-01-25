import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { resetState } from '../redux/authSlice'; // State'i sıfırlamak için gerekli aksiyon

const Seats = ({ flightId }) => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // Koltuk bilgilerini API'den çekme
        const fetchSeats = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/seats/flight/${flightId}`);
                setSeats(response.data);
            } catch (error) {
                console.error('Koltuk bilgileri yüklenirken bir hata oluştu:', error);
            }
        };

        fetchSeats();
    }, [flightId]); // dispatch'i kaldırdık

    const handleSelectSeat = (seatId) => {
        setSelectedSeat(seatId);
        console.log('Seçilen Koltuk:', seatId);
    };

    return (
        <div>
            <h1>Koltuk Seçimi</h1>
            <div className="row">
                {seats.map((seat) => (
                    <div className="col-2 mb-3" key={seat.id}>
                        <button
                            className={`btn ${selectedSeat === seat.id ? 'btn-primary' : 'btn-secondary'} w-100`}
                            onClick={() => handleSelectSeat(seat.id)}
                            disabled={seat.status === 'RESERVED'}
                        >
                            {seat.seatNumber}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seats;
