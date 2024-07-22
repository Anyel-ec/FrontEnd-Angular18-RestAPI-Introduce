import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model'; // Asegúrate de importar la interfaz

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllClients(): Promise<Client[]> {
    return new Promise<Client[]>((resolve, reject) => {
      this.http.get<Client[]>(`${this.BASE_URL}clientes`).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al obtener los clientes:', err);
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

  getClientByIdentification(identification: string): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.http.get<Client>(`${this.BASE_URL}usuario/${identification}`).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al obtener los datos:', err);
          reject(err);
        }
      });
    });
  }

  getClientById(id: number): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.http.get<Client>(`${this.BASE_URL}cliente/${id}`).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al obtener los datos:', err);
          reject(err);
        }
      });
    });
  }

  deleteClient(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.delete<void>(`${this.BASE_URL}cliente/${id}`).subscribe({
        next: () => resolve(),
        error: (err) => {
          console.error('Error al eliminar el cliente:', err);
          reject(err);
        }
      });
    });
  }

  updateClient(id: number, data: Client): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.http.put<Client>(`${this.BASE_URL}cliente/${id}`, data).subscribe({
        next: (data) => resolve(data),
        error: (err) => {
          console.error('Error al actualizar el cliente:', err);
          reject(err);
        }
      });
    });
  }


}
