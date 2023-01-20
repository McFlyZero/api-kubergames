import fetchScores from "../helpers/fetch-scores.js";
import submitScore from "../helpers/submit-score.js";

//GET Minesweeper
export async function getMinesweeper(request, response) {
  try {
    const scores = await fetchScores("minesweeper");

    response.status(200).json({ scores });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//POST Minesweeper
export async function addMinesweeper(request, response) {
  const { name, score } = request.body;

  if (name.length > 4) {
    return response.status(400).json({
      message: "Name cannot be longer that 4 characters.",
    });
  }

  try {
    const generatedKey = submitScore(name, score, "minesweeper");

    response.status(200).json({
      generatedKey,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//GET Space Invaders
export async function getSpaceInvaders(request, response) {
  try {
    const scores = await fetchScores("space-invaders");

    response.status(200).json({ scores });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//POST Space Invaders
export async function addSpaceInvaders(request, response) {
  const { name, score } = request.body;

  if (name.length > 4) {
    return response.status(400).json({
      message: "Name cannot be longer that 4 characters.",
    });
  }

  try {
    const generatedKey = submitScore(name, score, "space-invaders");

    response.status(200).json({
      generatedKey,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//GET Snake Game
export async function getSnakeGame(request, response) {
  try {
    const scores = await fetchScores("snake");

    response.status(200).json({ scores });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//POST Snake Game
export async function addSnakeGame(request, response) {
  const { name, score } = request.body;

  if (name.length > 4) {
    return response.status(400).json({
      message: "Name cannot be longer that 4 characters.",
    });
  }

  try {
    const generatedKey = submitScore(name, score, "snake");

    response.status(200).json({
      generatedKey,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//GET Flappy Bird
export async function getFlappyBird(request, response) {
  try {
    const scores = await fetchScores("flappy-bird");

    response.status(200).json({ scores });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}

//POST Flappy Bird
export async function addFlappyBird(request, response) {
  const { name, score } = request.body;

  if (name.length > 4) {
    return response.status(400).json({
      message: "Name cannot be longer that 4 characters.",
    });
  }

  try {
    const generatedKey = submitScore(name, score, "flappy-bird");

    response.status(200).json({
      generatedKey,
      message: "Score submitted successfully!",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      error: error,
      code: error.code,
    });
  }
}
