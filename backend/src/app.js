const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.routes");
const dealRoutes = require("./routes/deal.routes");
const claimRoutes = require("./routes/claim.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

// must be LAST
app.use(errorMiddleware);

module.exports = app;
