export type Game = {
  id:number
  title: string;
  platform: string;
}

export type RGame = Omit<Game,"id">