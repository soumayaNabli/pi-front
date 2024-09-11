import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_PATH } from '../CONSTS';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reclamation } from './reclamation.service';

export interface User {
    id: number;
    username: string;
    mdp: string;
    profession: string;
    role: string;
    email: string;
    reclamations: Reclamation[];
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = `${URL_PATH}/user`;
    private usersSubject = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject.asObservable();

    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get<User[]>(this.baseUrl).subscribe(data => {
            this.usersSubject.next(data);
        });
    }

    getById(id: number) {
        return this.http.get<User>(`${this.baseUrl}/${id}`);
    }

    create(user: User): Observable<any> {
        return this.http.post(this.baseUrl, user);
                
    }

    update(id: number, user: User) {
        return this.http.put(`${this.baseUrl}/${id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
