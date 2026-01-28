const dotenv = require("dotenv");

function loadEnv() {
  dotenv.config();

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in .env");
    process.exit(1);
  }

  if (!process.env.JWT_SECRET) {
    console.error("❌ JWT_SECRET is missing in .env");
    process.exit(1);
  }
}

module.exports = loadEnv;
