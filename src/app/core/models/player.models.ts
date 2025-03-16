export interface Player {
  id: string;
  name: string;
  teamId: string;
  clubId: string;
  position: string;
  age: number;
  createdAt: string;
  updatedAt: string;
  rating:number,
  team:string,
  club:string
}

export interface PlayerResponse {
  status: string;
  data: Player;
}

export interface PlayersListResponse {
  status: string;
  results: number;
  data: Player[];
}

export interface TransferResponse {
  status: string;
  message: string;
  data: Player;
}
