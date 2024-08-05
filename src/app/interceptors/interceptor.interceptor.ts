import { HttpHeaders, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);

  const newRequest = req.clone({headers});
  return next(newRequest);
};
