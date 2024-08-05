import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  const token = auth.getToken();
  if(token){
    return true
  }else{
    router.navigateByUrl("/login")
    return false
  }
};
