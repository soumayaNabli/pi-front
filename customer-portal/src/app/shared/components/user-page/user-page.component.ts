import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';

const USERS_DATA = [
    {
        "id": 5,
        "username": "soumaya_nabli",
        "mdp": "$2a$10$14gcmc3iMV/NnAXglk8.Ke0XwZzAP9ANpoap7Bjfn3nAlzoBrZyRW",
        "profession": "ingenieur informatique",
        "role": "expert",
        "email": "soumaya.nabli7@gmail.com",
        "reclamations": [
            {
                "id": 10,
                "description": "bara ",
                "statut": "traite",
                "date": "2024-09-07",
                "priorite": "urgente",
                "fichier": null,
                "reponse": {
                    "id": 13,
                    "description": "bara ",
                    "date": "2024-09-07",
                    "rating": 3
                }
            },
            {
                "id": 11,
                "description": "bara ",
                "statut": "traite",
                "date": "2024-09-07",
                "priorite": "urgente",
                "fichier": null,
                "reponse": {
                    "id": 15,
                    "description": "bara ",
                    "date": "2024-09-07",
                    "rating": 3
                }
            },
            {
                "id": 13,
                "description": " *** , je ne paux pas faire ceci *** ",
                "statut": "non_traite",
                "date": "2024-09-07",
                "priorite": "moyenne",
                "fichier": null,
                "reponse": null
            }
        ]
    },
    {
        "id": 6,
        "username": "newuser",
        "mdp": "$2a$10$Zw2ShWurEmE7TG6LZO6sgutXAKjIyErVx.y5b4pWSQJgFXXe7sjIi",
        "profession": "medecin",
        "role": "expert",
        "email": "newuser@gmail.com",
        "reclamations": []
    },
    {
        "id": 7,
        "username": "otail-marzouk",
        "mdp": "$2a$10$eaPLlDg.U1qztR81CicKV.xqSqFn/gQyn3t1YCZls3G6sN.swLxxS",
        "profession": "ingenieur",
        "role": "user",
        "email": "mohamedotail.marzouk@gmail.com",
        "reclamations": [
            {
                "id": 14,
                "description": " *** , je ne peux pas faire ceci *** ",
                "statut": "traite",
                "date": "2024-09-07",
                "priorite": "moyenne",
                "fichier": null,
                "reponse": {
                    "id": 16,
                    "description": "okay ",
                    "date": "2024-09-07",
                    "rating": 1
                }
            },
            {
                "id": 15,
                "description": " ce n'est pas professionel ",
                "statut": "traite",
                "date": "2024-09-08",
                "priorite": "basse",
                "fichier": null,
                "reponse": {
                    "id": 17,
                    "description": "okay ",
                    "date": "2024-09-08",
                    "rating": 2
                }
            }
        ]
    },
    {
        "id": 8,
        "username": "farah-laamouri",
        "mdp": "$2a$10$AdHrD7wqIrnvpUP5sc9M8ODUm8IN8SPNyp2SRhkJCUNSjZGboac3q",
        "profession": "ceo of animal care company",
        "role": "admin",
        "email": "lamourifarah10@gmail.com",
        "reclamations": []
    },
    {
        "id": 9,
        "username": "dali",
        "mdp": "$2a$10$qf41Aw4PeN0A.0.2AwbphuWaObnqHWaDKMh6X.LFWeTlMIy2bX8RW",
        "profession": "farmer",
        "role": "expert",
        "email": "mohamed.ali.znidi@gmail.com",
        "reclamations": []
    }
]

@Component({
    selector: 'app-user-page',
    standalone: true,
    imports: [CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, FloatLabelModule, FieldsetModule, TagModule],
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
    users = USERS_DATA;
    selectedUser: any;
    showDetails = false;
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            username: new FormControl<string | null>(null),
            email: new FormControl<string | null>(null),
            profession: new FormControl<string | null>(null),
            role: new FormControl<string | null>(null),
        });
    }

    onRowSelect(event: any) {
        this.formGroup?.setValue({
            username: event.data.username,
            email: event.data.email,
            profession: event.data.profession,
            role: event.data.role
        })
        console.log("🚀 ~ UserPageComponent ~ onRowSelect ~ this.formGroup:", this.formGroup)
        console.log("🚀 ~ UserPageComponent ~ onRowSelect ~ event.data:", event.data)
        this.showDetails = true;
    }
    onUnRowSelect(event: any) {
        console.log(event);
    }
}
