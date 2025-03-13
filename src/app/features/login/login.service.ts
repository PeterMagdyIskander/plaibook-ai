import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,FacebookAuthProvider,GoogleAuthProvider,signInWithPopup } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})

export class LoginService {


  constructor(private auth:Auth , private router :Router) { }


  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
    } catch (error) {
      alert('Wrong Email/Password');
      this.router.navigate(['/login']);
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
