import { Route } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { RoleGuard } from './shared/guard/role.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ExpertComponent } from './expert/expert.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [RoleGuard,AuthGuard],
    // data: { expectedRole: 'admin' },
  },
  { path: 'admin/reclamation', component: AdminComponent },
  { path: 'admin/expert', component: AdminComponent },
  {
    path: 'user',
    component: UserComponent,
    // canActivate: [AuthGuard, RoleGuard],
    // data: { expectedRole: 'user' },
  },
  { path: 'user/reclamation', component: UserComponent },
  { path: 'user/rdv', component: UserComponent },
  { path: 'user/agenda', component: UserComponent },
  { path: 'expert', 
    component: ExpertComponent,
    // canActivate: [AuthGuard, RoleGuard],
    // data: { expectedRole: 'expert' },
  },
  { path: 'expert/reclamation', component: ExpertComponent },
  { path: 'expert/rdv', component: ExpertComponent },
  { path: 'expert/agenda', component: ExpertComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];