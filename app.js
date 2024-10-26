const express = require('express');
const app = express();
const cors = require('cors');
const ConnectToDatabase = require("./config/db-connection");
const userRoutes = require('./routes/user');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

ConnectToDatabase();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
