export interface Role {
  id: string;
  name: string;
  permissions:string[];
  createdAt: string;
  updatedAt: string;
}

export interface RoleResponse {
  status: string;
  data: Role;
}

export interface RolesListResponse {
  status: string;
  results: number;
  data: Role[];
}

export interface TeamResponse {
  status: string;
  results: number;
  data: any[];
}
