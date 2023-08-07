// src/components/AllTrainsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import MockTrains from './MockTrains';

const AllTrainsPage = () => {
  const trainsToShow = MockTrains.filter((train) => {
    const currentTime = new Date();
    const departureTime = new Date(train.departure);
    const timeDifferenceInMinutes = Math.floor((departureTime - currentTime) / (1000 * 60));
    return timeDifferenceInMinutes > 30;
  });

  const sortedTrains = [...trainsToShow].sort((a, b) => {
    if (a.price === b.price) {
      if (a.seatsAvailable.sleeper + a.seatsAvailable.ac === b.seatsAvailable.sleeper + b.seatsAvailable.ac) {
        return new Date(a.departure) - new Date(b.departure);
      }
      return (a.seatsAvailable.sleeper + a.seatsAvailable.ac) - (b.seatsAvailable.sleeper + b.seatsAvailable.ac);
    }
    return a.price - b.price;
  });

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {sortedTrains.map((train) => (
        <div key={train.id}>
          <h2>{train.name}</h2>
          <p>Departure: {train.departure.toLocaleString()}</p>
          <p>Price: {train.price}</p>
          <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
          <p>AC Seats Available: {train.seatsAvailable.ac}</p>
        </div>
      ))}
      <Link to="/single-train">View Single Train</Link>
    </div>
  );
};

export default AllTrainsPage;
