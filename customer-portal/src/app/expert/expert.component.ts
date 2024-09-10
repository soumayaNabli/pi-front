import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TabViewModule } from 'primeng/tabview';
import { AgendaComponent } from '../shared/components/agenda/agenda.component';
import { RdvPageComponent } from '../shared/components/rdv-page/rdv-page.component';
import { ReclamationPageComponent } from '../shared/components/reclamation-page/reclamation-page.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [CommonModule,HttpClientModule, HeaderComponent, TabViewModule, AgendaComponent, RdvPageComponent, ReclamationPageComponent],
  providers: [HttpClient],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css',
})
export class ExpertComponent {}
