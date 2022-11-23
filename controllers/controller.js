const { response } = require("express");
const mysql = require("mysql");
const config = require("../config");

const connection = mysql.createConnection(config.db);
//GET Minesweeper
exports.getMinesweeper = (request, response) => {
  connection.query(
    "SELECT name_ms, score_ms FROM kubergames.sb_minesweeper ORDER BY score_ms ASC LIMIT 10;",
    function (error, results) {
      if (error) throw error;

      response.json({
        results: results.map((item, index) => {
          return {
            name: item.name_ms,
            score: item.score_ms,
          };
        }),
      });
    }
  );
};

//POST Minesweeper
exports.addMinesweeper = (request, response) => {
  const { name, score } = request.body;
  //console.log(name, score);
  connection.query(
    `INSERT INTO sb_minesweeper(name_ms, score_ms) VALUES ('${name}',${score})`,
    function (error, results) {
      if (error) {
        response.status(500).json({
          message: error.message,
        });
      }
      response.json({
        count: results.affectedRows,
      });
    }
  );
};

//GET Space Invaders
exports.getSpaceInvaders = (request, response) => {
  connection.query(
    "SELECT name_si, score_si FROM kubergames.sb_space_invaders ORDER BY score_si DESC LIMIT 10;",
    function (error, results) {
      if (error) throw error;

      response.json({
        results: results.map((item, index) => {
          return {
            name: item.name_si,
            score: item.score_si,
          };
        }),
      });
    }
  );
};

//POST Space Invaders
exports.addSpaceInvaders = (request, response) => {
  const { name, score } = request.body;
  //console.log(name, score);
  connection.query(
    `INSERT INTO sb_space_invaders(name_si, score_si) VALUES ('${name}',${score})`,
    function (error, results) {
      if (error) {
        response.status(500).json({
          message: error.message,
        });
      }
      response.json({
        count: results.affectedRows,
      });
    }
  );
};

//GET Snake Game
exports.getSnakeGame = (request, response) => {
  connection.query(
    "SELECT name_sg, score_sg FROM kubergames.sb_snake_game ORDER BY score_sg DESC LIMIT 10;",
    function (error, results) {
      if (error) throw error;

      response.json({
        results: results.map((item, index) => {
          return {
            name: item.name_sg,
            score: item.score_sg,
          };
        }),
      });
    }
  );
};

//POST Snake Game
exports.addSnakeGame = (request, response) => {
  const { name, score } = request.body;
  //console.log(name, score);
  connection.query(
    `INSERT INTO sb_snake_game(name_sg, score_sg) VALUES ('${name}',${score})`,
    function (error, results) {
      if (error) {
        response.status(500).json({
          message: error.message,
        });
      }
      response.json({
        count: results.affectedRows,
      });
    }
  );
};

//GET Flappy Bird
exports.getFlappyBird = (request, response) => {
  connection.query(
    "SELECT name_fb, score_fb FROM kubergames.sb_flappy_bird ORDER BY score_fb DESC LIMIT 10;",
    function (error, results) {
      if (error) throw error;

      response.json({
        results: results.map((item, index) => {
          return {
            name: item.name_fb,
            score: item.score_fb,
          };
        }),
      });
    }
  );
};

//POST Flappy Bird
exports.addFlappyBird = (request, response) => {
  const { name, score } = request.body;
  //console.log(name, score);
  connection.query(
    `INSERT INTO sb_flappy_bird(name_fb, score_fb) VALUES ('${name}',${score})`,
    function (error, results) {
      if (error) {
        response.status(500).json({
          message: error.message,
        });
      }
      response.json({
        count: results.affectedRows,
      });
    }
  );
};


