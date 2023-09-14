import { Game, RGame } from "../protocols/game-protocol";
import { connection } from "database/database.connection";

type Games = Array<Game>;

async function getGames() {
  const result = await connection.query<Games>(`SELECT * FROM games`)
  return result.rows
}

async function createGame(game: RGame) {
  await connection.query(`INSERT INTO (title,platform) VALUES ($1,$2)`,[game.title,game.platform])
}

async function getGameByTitleAndPlatform(game: RGame) {
  const result = await connection.query<Games>(`SELECT * FROM games WHERE title=$1 AND platform=$2`,[game.title,game.platform])
  return result.rows
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;