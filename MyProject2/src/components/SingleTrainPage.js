// src/components/SingleTrainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import MockTrains from './MockTrains';

const SingleTrainPage = () => {
  // You can implement the search functionality to fetch the specific train by ID or name
  const trainToShow = MockTrains[0];

  return (
    <div>
      <h1>Single Train Details</h1>
      {trainToShow && (
        <div>
          <h2>{trainToShow.name}</h2>
          <p>Departure: {trainToShow.departure.toLocaleString()}</p>
          <p>Price: {trainToShow.price}</p>
          <p>Sleeper Seats Available: {trainToShow.seatsAvailable.sleeper}</p>
          <p>AC Seats Available: {trainToShow.seatsAvailable.ac}</p>
        </div>
      )}
      <Link to="/">View All Trains</Link>
    </div>
  );
};

export default SingleTrainPage;
