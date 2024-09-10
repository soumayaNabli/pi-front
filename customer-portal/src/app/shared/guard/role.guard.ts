import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole();
    
    console.log("🚀 ~ RoleGuard ~ canActivate ~ canActivate:", userRole,expectedRole)
    if (this.authService.isLoggedIn() && userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}