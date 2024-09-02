import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";
import { routes } from './app.routes';
import { firebaseConfig } from './firebase';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      JwtModule.forRoot({
        config: {
          tokenGetter: nombrefunc,
          allowedDomains: ["localhost:3000"],
          disallowedRoutes: ["http://localhost:3000/login/"],
        },
      })
      ,
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
     ]),
     provideHttpClient(withInterceptorsFromDi())
    ]
};

export function nombrefunc() {
  return localStorage.getItem("userToken");
}