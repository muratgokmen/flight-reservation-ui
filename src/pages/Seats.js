import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seats = ({ flightId }) => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);

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
    }, [flightId]);  // flightId değiştiğinde koltuk bilgilerini yeniden çek

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
