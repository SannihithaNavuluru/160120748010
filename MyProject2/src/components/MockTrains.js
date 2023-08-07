// src/mockData.js
const MockTrains = [
    {
      id: 1,
      name: 'Express 1',
      departure: new Date(2023, 8, 1, 10, 30), // Sample departure date (YYYY, MM, DD, HH, mm)
      price: 100,
      seatsAvailable: {
        sleeper: 50,
        ac: 20,
      },
    },
    // Add more train objects here...
  ];
  
  export default MockTrains;