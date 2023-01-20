import express from "express";

import * as gamesController from "../controllers/controller.js";

const router = express.Router();

//GET scoreboard del space-invaders
router.get("/space-invaders/", gamesController.getSpaceInvaders);
//POST nuevo nombre y score
router.post("/space-invaders/", gamesController.addSpaceInvaders);

//GET scoreboard del minesweeper
router.get("/minesweeper/", gamesController.getMinesweeper);
//POST nuevo nombre y score
router.post("/minesweeper/", gamesController.addMinesweeper);

//GET scoreboard del snake-game
router.get("/snake-game/", gamesController.getSnakeGame);
//POST nuevo nombre y score
router.post("/snake-game/", gamesController.addSnakeGame);

//GET scoreboard del flappy-bird
router.get("/flappy-bird/", gamesController.getFlappyBird);
//POST nuevo nombre y score
router.post("/flappy-bird/", gamesController.addFlappyBird);

export default router;
