import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-roles-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './roles-management.component.html',
  styleUrl: './roles-management.component.scss',
})
export class RolesManagementComponent implements OnInit {
  roleForm!: FormGroup;
  isDialogVisible = false;
  operations: string[] = ['view', 'create', 'update', 'delete'];
  resources: string[] = ['club', 'team', 'player'];
  permissions: string[] = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      operation: ['', Validators.required],
      resource: ['', Validators.required],
    });
  }

  openDialog(): void {
    this.isDialogVisible = true;
  }

  closeDialog(): void {
    this.isDialogVisible = false;
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      // this.clubService.createClub({ name: this.clubForm.value.name });
      this.closeDialog();
      this.roleForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.roleForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }isPermissionValid(): boolean {
    const operation = this.roleForm.get('operation')?.value;
    const resource = this.roleForm.get('resource')?.value;
    return operation && resource;
  }

  addPermission(): void {
    if (this.isPermissionValid()) {
      const operation = this.roleForm.get('operation')?.value;
      const resource = this.roleForm.get('resource')?.value;
      const permission = `${operation}:${resource}`;

      // Check if permission already exists to avoid duplicates
      if (!this.permissions.includes(permission)) {
        this.permissions.push(permission);

        // Reset only operation and resource fields
        this.roleForm.patchValue({
          operation: '',
          resource: ''
        });
      }
    }
  }

  removePermission(index: number): void {
    this.permissions.splice(index, 1);
  }
}
