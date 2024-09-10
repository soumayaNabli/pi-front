import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;
  private userName: string | null = null;

  constructor(private router: Router) {}

  login(role: string, name: string): void {
    this.userName = name;
    this.isAuthenticated = true;
    this.userRole = role;
    this.router.navigate(['/'+role]);
  }

  getUser(): any {
    return {
      name: this.userName,
      role: this.userRole
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
    this.userName = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string | null {
    return this.userRole;
  }
}