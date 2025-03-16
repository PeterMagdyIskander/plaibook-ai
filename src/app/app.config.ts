import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { getApp, getApps, initializeApp } from 'firebase/app';
import { routes } from './app.routes';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideFirebaseApp } from '@angular/fire/app';
import { provideHttpClient } from '@angular/common/http';
const firebaseConfig = {
  apiKey: "AIzaSyBnV17qRa7xS1RCJfEoi7c2gHkXMgX7ZBE",
  authDomain: "plaibook-ai.firebaseapp.com",
  projectId: "plaibook-ai",
  storageBucket: "plaibook-ai.firebasestorage.app",
  messagingSenderId: "728681837677",
  appId: "1:728681837677:web:38975609886b54f474bb64",
  measurementId: "G-3MRNR9FDQK"
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => firebaseApp),
    provideAuth(() => getAuth(firebaseApp)),
    provideFirestore(() => getFirestore(firebaseApp)),
    provideHttpClient(),
  ],
};
