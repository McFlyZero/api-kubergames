import { readFile } from "fs/promises";

import http from "http";
import express from "express";
import * as dotenv from "dotenv";
import admin from "firebase-admin";

import gamesRoute from "./routes/games.js";

dotenv.config();
const serviceAccount = JSON.parse(
  // Must set up a .env file with the path to your service account JSON file
  await readFile(new URL(process.env.SERVICE_ACCOUNT_PATH, import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Must set up a .env file with your Firebase RTDB's URL
  databaseURL: process.env.FIREBASE_URL,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();
});

app.use("/kubergames", gamesRoute);

const server = http.createServer(app);

server.listen(process.env.PORT || 5001, () => {
  console.log(`Listening on port ${server.address().port}`);
});
