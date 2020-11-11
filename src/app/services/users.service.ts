import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IngredientType} from '../module/IngredientType';

export interface People {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Iterable<People>> {
    return this.httpClient.get<Iterable<People>>('http://localhost:8080/people/all');
  }

  saveUser(name: string) {
    return this.httpClient.put<void>('http://localhost:8080/people/save', name);
  }

  saveIngredient(name: string, type: IngredientType){
    return this.httpClient.post<void>('http://localhost:8080/ingredient', {name, type});
  }
}
