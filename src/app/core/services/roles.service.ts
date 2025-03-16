import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Role, RoleResponse, RolesListResponse } from '../models/role.models';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiUrl = `http://localhost:3000/api/roles`;
  constructor(private http: HttpClient) {}
  loadingRoles = signal<boolean>(false);
  roles = signal<Role[]>([]);

  getAllRoles() {
    this.loadingRoles.set(true);
    this.http.get<RolesListResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.roles.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingRoles.set(false);
      },
    });
  }
  createRole(roleData: { name: string; permissions: string[] }) {
    this.loadingRoles.set(false);
    this.http.post<RoleResponse>(this.apiUrl, roleData).subscribe({
      next: (res) => {
        this.roles.set([...this.roles(), res.data]);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingRoles.set(false);
      },
    });
  }
}
