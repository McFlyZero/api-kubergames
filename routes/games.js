const express = require('express');

const router = express.Router();
const gamescontroller = require('../controllers/controller');

//GET scoreboard del space-invaders
router.get('/space-invaders/', gamescontroller.getSpaceInvaders);
//POST nuevo nombre y score
router.post('/space-invaders/add', gamescontroller.addSpaceInvaders);

//GET scoreboard del minesweeper
router.get('/minesweeper/', gamescontroller.getMinesweeper);
//POST nuevo nombre y score
router.post('/minesweeper/add', gamescontroller.addMinesweeper);

//GET scoreboard del snake-game
router.get('/snake-game/', gamescontroller.getSnakeGame);
//POST nuevo nombre y score
router.post('/snake-game/add', gamescontroller.addSnakeGame);

//GET scoreboard del flappy-bird
router.get('/flappy-bird/', gamescontroller.getFlappyBird);
//POST nuevo nombre y score
router.post('/flappy-bird/add', gamescontroller.addFlappyBird);

module.exports = router;