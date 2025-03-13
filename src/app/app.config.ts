import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getApp, getApps, initializeApp } from "firebase/app";
import { routes } from './app.routes';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideFirebaseApp } from '@angular/fire/app';
const firebaseConfig = {
  apiKey: "AIzaSyBaCQlmvoItKg69BDgD-sahaoMi4Y1PUOc",
  authDomain: "plaibook-ai-master.firebaseapp.com",
  projectId: "plaibook-ai-master",
  storageBucket: "plaibook-ai-master.firebasestorage.app",
  messagingSenderId: "687051978902",
  appId: "1:687051978902:web:ee3ef21dcc1c70d2aa2ab7",
  measurementId: "G-VL2DJ200LD"
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
     provideFirebaseApp(() => firebaseApp),
     provideAuth(()=>getAuth(firebaseApp)),
     provideFirestore(() => getFirestore(firebaseApp))
  ]
};
