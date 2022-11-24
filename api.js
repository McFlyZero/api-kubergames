const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const GamesRoute = require("./routes/games");

app.use("/kubergames", GamesRoute);

app.listen(3000, () => {
  console.log("server on port 3000");
});
