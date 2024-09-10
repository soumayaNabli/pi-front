import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_PATH } from '../CONSTS';

export interface Rdv {
    id: number;
    date: string;
    duree: number;
    sujet: string;
    statut: string;
}

@Injectable({
    providedIn: 'root'
})
export class RdvService {
    baseUrl = `${URL_PATH}/rdvs`; 
    rdvs = signal<Rdv[]>([]);

    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get<Rdv[]>(this.baseUrl).subscribe(data => {
            this.rdvs.set(data);
        });
    }

    getByUserId(id: number) {
        return this.http.get<Rdv[]>(`${this.baseUrl}/user/${id}`);
    }

    getById(id: number) {
        return this.http.get<Rdv>(`${this.baseUrl}/${id}`);
    }

    create(rdv: Rdv) {
        return this.http.post(this.baseUrl, rdv);
    }

    update(id: number, rdv: Rdv) {
        return this.http.put(`${this.baseUrl}/${id}`, rdv);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}