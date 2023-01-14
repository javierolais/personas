import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  API_URL = 'http://localhost:9000/api'
  constructor(private http: HttpClient	) { }

    getPersona() {
      return this.http.get(this.API_URL);
    }

    savePersona(persona: Persona) {
      return this.http.post(`${this.API_URL}/insertar`, persona);
    }
}
