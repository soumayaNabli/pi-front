import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AuthService } from '../../service/auth.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AuthService,HttpClient],
  imports: [CommonModule, DividerModule, ButtonModule, OverlayPanelModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.getUser();
   }

  onLogout(): void {
    this.authService.logout();
  }
}
