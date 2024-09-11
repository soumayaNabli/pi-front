import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { URL_PATH } from '../CONSTS';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${URL_PATH}/user`;
  private userSubject = new BehaviorSubject<User[]>([]);
  user$ = this.userSubject.asObservable();
  private isAuthenticated = false;
  private userRole: string | null = null;
  private userName: string | null = null;

  constructor(private router: Router, private http: HttpClient) { }

  login(username: string, password: string): void {
    console.log("🚀 ~ AuthService ~ login ~ mdp:", password)
    console.log("🚀 ~ AuthService ~ login ~ username:", username)
    this.http.post(`${this.baseUrl}/login`, { username, password }).subscribe(res => {
      console.log(res);
      this.userName = username;
      this.isAuthenticated = true;
      this.userRole = "admin";
    }
    )

    this.router.navigate(['/' + this.userRole]);
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