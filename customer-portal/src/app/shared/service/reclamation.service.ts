import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_PATH } from '../CONSTS';


export interface Reponse {
    id: number;
    description: string;
    date: string;
    rating: number;
}

export interface Reclamation {
    id: number;
    description: string;
    statut: string;
    date: string;
    priorite: string;
    fichier: any;
    reponse: Reponse;
}

@Injectable({
    providedIn: 'root'
})
export class ReclamationService {
    baseUrl = `${URL_PATH}/reclamations`;
    reclamations = signal<Reclamation[]>([]);

    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get<Reclamation[]>(this.baseUrl).subscribe(data => {
            this.reclamations.set(data);
        });
    }

    getById(id: number) {
        return this.http.get<Reclamation>(`${this.baseUrl}/${id}`);
    }

    create(reclamation: Reclamation) {
        return this.http.post(this.baseUrl, reclamation);
    }

    update(id: number, reclamation: Reclamation) {
        return this.http.put(`${this.baseUrl}/${id}`, reclamation);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
