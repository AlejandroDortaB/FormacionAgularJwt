import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const verifyTokenGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)
  let token = sessionStorage.getItem("token");
  console.log("token",token);
  if(token){
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
