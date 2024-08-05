import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { routes } from "./app.routes";
import { interceptorInterceptor } from "./interceptors/interceptor.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([interceptorInterceptor])),
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
};
