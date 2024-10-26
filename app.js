const express = require('express');
const app = express();
const cors = require('cors');
const ConnectToDatabase = require("./config/db-connection");
require('dotenv').config();

app.use(cors());
app.use(express.json());

ConnectToDatabase();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
