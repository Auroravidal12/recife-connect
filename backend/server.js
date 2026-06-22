const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let locations = [];

// POST localização (evita duplicado igual seguido)
app.post("/location", (req, res) => {
  const { latitude, longitude } = req.body;

  const last = locations[locations.length - 1];

  if (
    last &&
    last.latitude === latitude &&
    last.longitude === longitude
  ) {
    return res.json({ message: "duplicado ignorado" });
  }

  locations.push({
    id: Date.now(),
    latitude,
    longitude,
  });

  res.json({ message: "salvo com sucesso" });
});

// GET histórico
app.get("/locations", (req, res) => {
  res.json(locations);
});

app.listen(3000, () => {
  console.log("Backend rodando em http://localhost:3000");
});