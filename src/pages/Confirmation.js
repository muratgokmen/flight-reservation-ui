import React from 'react';

const Confirmation = ({ reservationDetails }) => {
    if (!reservationDetails) {
        return <p>Rezervasyon bilgileri yüklenemedi.</p>;
    }

    const { flight, seat, user } = reservationDetails;

    return (
        <div className="container mt-5">
            <h1>Rezervasyon Onayı</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Rezervasyon Detayları</h5>
                    <p className="card-text"><strong>Uçuş:</strong> {flight.airline} - {flight.departure} to {flight.destination}</p>
                    <p className="card-text"><strong>Koltuk Numarası:</strong> {seat.seatNumber}</p>
                    <p className="card-text"><strong>Yolcu:</strong> {user.name}</p>
                    <p className="card-text"><strong>Toplam Fiyat:</strong> ${flight.price}</p>
                    <p className="card-text">Rezervasyonunuz başarıyla tamamlandı. Yolculuğunuzun keyfini çıkarın!</p>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
