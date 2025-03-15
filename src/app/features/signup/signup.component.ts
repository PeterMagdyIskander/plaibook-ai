import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  loginForm: FormGroup;
constructor(private fb: FormBuilder, private authService:AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.createPasswordValidator()
      ]],
      reenterPassworrd: ['', [
        Validators.required,
        Validators.minLength(8),
        this.createRenterPasswordValidator(),
      ]]
    });
  }

  createPasswordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

      return !hasUpperCase ? { hasUpperCase: true } :
             !hasLowerCase ? { hasLowerCase: true } :
             !hasNumber ? { hasNumber: true } :
             !hasSpecialChar ? { hasSpecialChar: true } :
             null;
    };
  }
  createRenterPasswordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
      const hasDifferentChars=this.loginForm.get('password')?.value===value;

      return !hasUpperCase ? { hasUpperCase: true } :
             !hasLowerCase ? { hasLowerCase: true } :
             !hasNumber ? { hasNumber: true } :
             !hasSpecialChar ? { hasSpecialChar: true } :
             !hasDifferentChars?{ hasDifferentChars: true } :
             null;
    };
  }
  isFieldInvalid(field: string): boolean {
    const formControl = this.loginForm.get(field);
    return formControl ? formControl.invalid && (formControl.dirty || formControl.touched) : false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.signup(email,password);
      // Here you would typically make an API call to your authentication service
      alert('account created');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  loginWithGoogle() {
    this.authService.googleLogin().then(user => {
      console.log('Google User:', user);
    });
  }

}
