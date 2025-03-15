export interface Team {
  id: string;
  name: string;
  clubId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamResponse {
  status: string;
  data: Team;
}

export interface TeamsListResponse {
  status: string;
  results: number;
  data: Team[];
}

export interface PlayersListResponse {
  status: string;
  results: number;
  data: any[];
}
