import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { enviroments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroService {

  private baseUrl:string = enviroments.baseUrl;

  constructor(private http: HttpClient) { }

getHeroes():Observable<Hero[]>{
  return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
}


}
