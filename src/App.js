import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MyPoojaBooking from './components/MyPoojaBooking';
import BookingPooja from './components/BookingPooja';
import BookingProvider from './context/BookinProvider';

const App = () => {
  return (
    <BookingProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypoojabookings" element={<MyPoojaBooking />} />
          <Route path="/bookpooja" element={<BookingPooja />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
};

export default App;
