import gamesRepository from "../repository/games-repository";
import { Game, RGame } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

function createGame(game: RGame) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

function gameAlreadyExists(game: RGame): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;