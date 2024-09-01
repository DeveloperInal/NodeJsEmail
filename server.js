const express = require('express');
const cors = require('cors');
const app = express();
const updateLocationRouter = require('./sendLocation.js');

app.use(cors());
app.use(express.json());
app.use('/', updateLocationRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
