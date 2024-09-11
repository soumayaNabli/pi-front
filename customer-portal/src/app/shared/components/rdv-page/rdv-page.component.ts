import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

const RDV_DATA = [
  {
    "id": 2,
    "date": "2024-08-27T11:14:09.93394",
    "duree": 3,
    "sujet": "consultation",
    "statut": "effectue"
  },
  {
    "id": 3,
    "date": "2024-08-27T11:14:41.808184",
    "duree": 1,
    "sujet": "divorce",
    "statut": "effectue"
  },
  {
    "id": 7,
    "date": "2024-09-07T20:00:00",
    "duree": 1,
    "sujet": "consultation",
    "statut": "effectue"
  },
  {
    "id": 8,
    "date": "2024-09-07T13:30:00",
    "duree": 2,
    "sujet": "consultation",
    "statut": "effectue"
  },
  {
    "id": 9,
    "date": "2024-09-07T10:30:00",
    "duree": 1,
    "sujet": "consultation BI",
    "statut": "effectue"
  },
  {
    "id": 10,
    "date": "2024-09-07T10:30:00",
    "duree": 1,
    "sujet": "consultation BI",
    "statut": "effectue"
  },
  {
    "id": 11,
    "date": "2024-10-07T12:30:00",
    "duree": 1,
    "sujet": "consultation ",
    "statut": "planifie"
  }
]

@Component({
  selector: 'app-rdv-page',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, DialogModule],
  templateUrl: './rdv-page.component.html',
  styleUrl: './rdv-page.component.css',
})
export class RdvPageComponent {
@Input() userRole=""
  rdvData = RDV_DATA
  selectedRdv: any



  onRowSelect(event: any) {
    console.log(event);
  }
  onUnRowSelect(event: any) {
    console.log(event);
  }
 }
