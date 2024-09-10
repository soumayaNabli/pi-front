import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';


const REACLAMATION_DATA = [

  {
    "id": 2,
    "description": "service lent",
    "statut": "traite",
    "date": "2023-12-17",
    "priorite": "basse",
    "fichier": [],
    "reponse": [{
      "id": 3,
      "description": "c'est resolu",
      "date": "2024-08-27",
      "rating": 0
    }]
  },
  {
    "id": 4,
    "description": "mauvais service",
    "statut": "traite",
    "date": "2024-08-27",
    "priorite": "moyenne",
    "fichier": [],
    "reponse": [{
      "id": 2,
      "description": "on va traiter ceci ",
      "date": "2024-08-27",
      "rating": 0
    }]
  },
  {
    "id": 5,
    "description": " j'ai un probleme ",
    "statut": "traite",
    "date": "2024-08-27",
    "priorite": "basse",
    "fichier": [],
    "reponse": [{
      "id": 6,
      "description": "c'est resolu",
      "date": "2024-08-27",
      "rating": 0
    }]
  },
  {
    "id": 6,
    "description": " aasba ",
    "statut": "traite",
    "date": "2024-08-27",
    "priorite": "urgente",
    "fichier": [],
    "reponse": [{
      "id": 10,
      "description": "c bon",
      "date": "2024-09-06",
      "rating": 3
    }]
  },
  {
    "id": 10,
    "description": "bara ",
    "statut": "traite",
    "date": "2024-09-07",
    "priorite": "urgente",
    "fichier": [],
    "reponse": [{
      "id": 13,
      "description": "bara ",
      "date": "2024-09-07",
      "rating": 3
    }]
  },
  {
    "id": 11,
    "description": "bara ",
    "statut": "traite",
    "date": "2024-09-07",
    "priorite": "urgente",
    "fichier": [],
    "reponse": [{
      "id": 15,
      "description": "bara ",
      "date": "2024-09-07",
      "rating": 3
    }]
  },
  {
    "id": 13,
    "description": " *** , je ne paux pas faire ceci *** ",
    "statut": "non_traite",
    "date": "2024-09-07",
    "priorite": "moyenne",
    "fichier": [],
    "reponse": null
  },
  {
    "id": 14,
    "description": " *** , je ne peux pas faire ceci *** ",
    "statut": "traite",
    "date": "2024-09-07",
    "priorite": "moyenne",
    "fichier": [],
    "reponse": [{
      "id": 16,
      "description": "okay ",
      "date": "2024-09-07",
      "rating": 1
    }]
  },
  {
    "id": 15,
    "description": " ce n'est pas professionel ",
    "statut": "traite",
    "date": "2024-09-08",
    "priorite": "basse",
    "fichier": [],
    "reponse": [{
      "id": 17,
      "description": "okay ",
      "date": "2024-09-08",
      "rating": 2
    }]
  }
]

@Component({
  selector: 'app-reclamation-page',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, FloatLabelModule, FieldsetModule, TagModule, BadgeModule, FileUploaderComponent],
  templateUrl: './reclamation-page.component.html',
  styleUrl: './reclamation-page.component.scss',
})
export class ReclamationPageComponent implements OnInit {

  reclamations = REACLAMATION_DATA;
  selectedReclamation: any;
  formGroup: FormGroup | undefined;
  uploadVisible = false;

  ngOnInit() {
    this.formGroup = new FormGroup({

    })
  }

  onRowSelect(event: any) {
    console.log(event);
  }
  onUnRowSelect(event: any) {
    console.log(event);
  }
}
