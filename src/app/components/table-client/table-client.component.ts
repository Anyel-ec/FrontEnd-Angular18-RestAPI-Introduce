import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../models/client.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, RouterLink],
  providers: [ClientService],
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.scss'
})
export class TableClientComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  confirmDeleteClient(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteClient(id);
      }
    });
  }


  async loadClients() {
    try {
      this.clients = await this.clientService.getAllClients();
    } catch (error) {
      console.error('Error al cargar la lista de clientes:', error);
    }
  }

  async deleteClient(id: number) {
    try {
      await this.clientService.deleteClient(id);
      Swal.fire(
        '¡Eliminado!',
        'El cliente ha sido eliminado.',
        'success'
      );
      this.loadClients(); // Reload the client list
    } catch (error) {
      Swal.fire(
        'Error',
        'Hubo un problema al eliminar el cliente.',
        'error'
      );
      console.error('Error al eliminar el cliente:', error);
    }
  }
}
