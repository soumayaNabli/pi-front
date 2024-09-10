import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthService } from './shared/service/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { RoleGuard } from './shared/guard/role.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@Component({
  standalone: true,
  providers: [AuthService, AuthGuard, RoleGuard],
  imports: [ NxWelcomeComponent, RouterModule, LoginComponent, AdminComponent, UserComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'customer-portal';
  constructor(public authService: AuthService) {}
}
