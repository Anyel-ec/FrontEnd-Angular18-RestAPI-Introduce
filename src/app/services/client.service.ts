import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Function to get client data by ID
  getClientByIdentification(identification: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE_URL + 'usuario/' + identification).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al obtener los datos:', err);
          reject(err);
        }
      });
    });
  }


  saveClient(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.BASE_URL + 'cliente/', data).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al obtener los datos:', err);
          reject(err);
        }
      });
    });
  }


}