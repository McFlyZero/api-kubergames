const { response } = require("express");
const mysql = require("mysql2/promise");
const db = require("../services/db");
const config = require("../config");

const connection = mysql.createConnection(config.db);
//GET Minesweeper
exports.getMinesweeper = async (request, response) => {
  try {
    const rows = await db.query(
      "SELECT name_ms, score_ms FROM kubergames.sb_minesweeper ORDER BY score_ms ASC LIMIT 10;"
    );

    response.status(200).json({ results: rows });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

//POST Minesweeper
exports.addMinesweeper = async (request, response) => {
  const { name, score } = request.body;

  try {
    const result = await db.query(
      `INSERT INTO sb_minesweeper(name_ms, score_ms) VALUES ('${name}',${score})`
    );

    response.status(201).json({
      insertedId: result.insertedId,
      affectedRows: result.affectedRows,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
      code: error.code,
    });
  }
};

//GET Space Invaders
exports.getSpaceInvaders = async (request, response) => {
  try {
    const rows = await db.query(
      "SELECT name_si, score_si FROM kubergames.sb_space_invaders ORDER BY score_si DESC LIMIT 10;"
    );

    response.json({ results: rows });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

//POST Space Invaders
exports.addSpaceInvaders = async (request, response) => {
  const { name, score } = request.body;

  try {
    const result = await db.query(
      `INSERT INTO sb_space_invaders(name_si, score_si) VALUES ('${name}',${score})`
    );

    response.status(201).json({
      insertedId: result.insertedId,
      affectedRows: result.affectedRows,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
      code: error.code,
    });
  }
};

//GET Snake Game
exports.getSnakeGame = async (request, response) => {
  try {
    const rows = await db.query(
      "SELECT name_sg, score_sg FROM kubergames.sb_snake_game ORDER BY score_sg DESC LIMIT 10;"
    );

    response.json({ results: rows });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

//POST Snake Game
exports.addSnakeGame = async (request, response) => {
  const { name, score } = request.body;

  try {
    const result = await db.query(
      `INSERT INTO sb_snake_game(name_sg, score_sg) VALUES ('${name}',${score})`
    );

    response.status(201).json({
      insertedId: result.insertedId,
      affectedRows: result.affectedRows,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
      code: error.code,
    });
  }
};

//GET Flappy Bird
exports.getFlappyBird = async (request, response) => {
  try {
    const rows = await db.query(
      "SELECT name_fb, score_fb FROM kubergames.sb_flappy_bird ORDER BY score_fb DESC LIMIT 10;"
    );

    response.json({ results: rows });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

//POST Flappy Bird
exports.addFlappyBird = async (request, response) => {
  const { name, score } = request.body;

  try {
    const result = await db.query(
      `INSERT INTO sb_flappy_bird(name_fb, score_fb) VALUES ('${name}',${score})`
    );

    response.status(201).json({
      insertedId: result.insertedId,
      affectedRows: result.affectedRows,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
      code: error.code,
    });
  }
};
