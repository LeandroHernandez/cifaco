import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "cifaco-web", appId: "1:945716021904:web:870594aad2df4f62da2615", storageBucket: "cifaco-web.firebasestorage.app", apiKey: "AIzaSyBSYWrxPHqJbAIHF2HuAEaGHOC6tucLha0", authDomain: "cifaco-web.firebaseapp.com", messagingSenderId: "945716021904" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
