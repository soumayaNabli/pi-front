import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [HttpClient,AuthService],
  imports: [CommonModule, ButtonModule, InputTextModule, FormsModule,CheckboxModule,RippleModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  username: string | null = "Dali";
  password: string | null = null;
  constructor(private authService: AuthService,private router: Router) {}


  login(form:any) {
    this.authService.login(form.value.username,form.value.mdp)
  }

}