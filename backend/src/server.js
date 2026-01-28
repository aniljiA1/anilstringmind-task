require("dotenv").config();
const loadEnv = require("./config/env");
const connectDB = require("./config/db");
const app = require("./app");

loadEnv();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
