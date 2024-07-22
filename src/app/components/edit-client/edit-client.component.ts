import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../models/client.model'; // Asegúrate de importar la interfaz


@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [ClientService],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent{
  public clientId: number = 0; // Changed to number
  public nombre: string = '';
  public cedula: string = '';
  public telefono: string = '';
  public correo: string = '';
  public direccion: string = '';

  constructor(private route: ActivatedRoute, private clientService: ClientService) {}

  ngOnInit() {
    this.clientId = Number(this.route.snapshot.paramMap.get('id')) || 0; // Convert to number
    this.loadClientData();
  }

  async loadClientData() {
    try {
      const client = await this.clientService.getClientById(this.clientId); // Use getClientById
      if (client) {
        this.nombre = client.nombre;
        this.cedula = client.cedula;
        this.telefono = client.telefono;
        this.correo = client.correo;
        this.direccion = client.direccion;
      }
    } catch (error) {
      console.error('Error al cargar los datos del cliente:', error);
    }
  }

  async saveCliente() {
    try {
      const updatedClient: Client = {
        id: this.clientId,
        nombre: this.nombre,
        cedula: this.cedula,
        telefono: this.telefono,
        correo: this.correo,
        direccion: this.direccion,
      };
      await this.clientService.updateClient(this.clientId, updatedClient);
      console.log('Cliente actualizado');
    } catch (err) {
      console.error('Error al actualizar el cliente:', err);
    }
  }
}
