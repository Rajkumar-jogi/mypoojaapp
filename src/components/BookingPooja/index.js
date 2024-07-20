import React, { useState, useContext } from 'react';
import './index.css';
import { BookingContext } from '../../context/BookinProvider';

const BookingPooja = () => {
  const { addBooking } = useContext(BookingContext);
  const [poojaName, setPoojaName] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    const newBooking = { id: Date.now(), poojaName, name, date, time, mobile };
    addBooking(newBooking);
    setMessage('Your pooja is booked!');
    setPoojaName('');
    setName('');
    setDate('');
    setTime('');
    setMobile('');
  };

  return (
    <div className="bookingPooja">
      <h1>Book Pooja</h1>
      <form onSubmit={handleBooking} className="booking-form">
        <div>
          <label>Pooja Name:</label>
          <input type="text" value={poojaName} onChange={(e) => setPoojaName(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <button type="submit">Book Pooja</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingPooja;
