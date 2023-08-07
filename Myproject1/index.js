// index.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

const fetchNumbersFromURL = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching numbers from ${url}:`, error.message);
    return [];
  }
};

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'No URLs provided in the query parameters.' });
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];
  const promises = urlArray.map((url) => fetchNumbersFromURL(url));

  try {
    const results = await Promise.all(promises.map((p) => Promise.race([p, new Promise((resolve) => setTimeout(resolve, 500))])));

    const allNumbers = results
      .flat()
      .filter((number, index, self) => self.indexOf(number) === index)
      .sort((a, b) => a - b);

    res.json({ numbers: allNumbers });
  } catch (error) {
    console.error('Error processing requests:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`number-management-service listening at http://localhost:${port}`);
});
