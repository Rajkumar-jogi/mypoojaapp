import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { BookingContext } from '../../context/BookinProvider';

const MyPoojaBooking = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <div className="myPoojaBooking">
      <h1>My Pooja Bookings</h1>
      <div className="bookings-list">
        {bookings.length === 0 ? (
          <div className="no-booking-container">
            <p>No bookings yet.</p>
            <Link to="/bookpooja"><button className="book-button">Book now</button></Link>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h2>{booking.poojaName}</h2>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Mobile:</strong> {booking.mobile}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPoojaBooking;
