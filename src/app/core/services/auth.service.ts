import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      const credentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
    } catch (error) {
      alert('Wrong Email/Password');
      this.router.navigate(['/login']);
    }
  }
  async signup(email: string, password: string) {
    try {
      const credentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.router.navigate(['']);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('User Info:', result.user);
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
      return result.user;
    } catch (error) {
      console.error('Google Login Error:', error);
      return null;
    }
  }

  async facebookLogin() {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('User Info:', result.user);
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
      return result.user;
    } catch (error) {
      console.error('Facebook Login Error:', error);
      return null;
    }
  }
}
