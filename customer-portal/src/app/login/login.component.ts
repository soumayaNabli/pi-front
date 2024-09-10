import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  username: string | null = "Dali";
  password: string | null = null;
  constructor(private authService: AuthService,private router: Router) {}

  loginAsAdmin() {
      this.authService.login('admin',this.username as string);
  }

  loginAsUser() {
    this.authService.login('user',this.username as string);
  }

  loginAsExpert() {
    this.authService.login('expert',this.username as string);
  }
}