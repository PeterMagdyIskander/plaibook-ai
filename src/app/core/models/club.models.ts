export interface Club {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClubResponse {
  status: string;
  data: Club;
}

export interface ClubsListResponse {
  status: string;
  results: number;
  data: Club[];
}

export interface TeamResponse {
  status: string;
  results: number;
  data: any[];
}
