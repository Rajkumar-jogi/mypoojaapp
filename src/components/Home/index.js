import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Pooja Booking</h1>
          <p>Book your poojas and ceremonies easily and conveniently.</p>
          <Link to='bookpooja'><button className="btn-primary">Book Now</button></Link>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Wedding Poojas</h3>
              <p>Book wedding poojas with experienced priests.</p>
            </div>
            <div className="card">
              <h3>Housewarming Poojas</h3>
              <p>Plan your housewarming ceremony with us.</p>
            </div>
            <div className="card">
              <h3>Special Poojas</h3>
              <p>Arrange for special poojas on auspicious days.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
