import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TabViewModule } from 'primeng/tabview';
import { AgendaComponent } from '../shared/components/agenda/agenda.component';
import { RdvPageComponent } from '../shared/components/rdv-page/rdv-page.component';
import { ReclamationPageComponent } from '../shared/components/reclamation-page/reclamation-page.component';

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TabViewModule, AgendaComponent, RdvPageComponent, ReclamationPageComponent],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css',
})
export class ExpertComponent {}
