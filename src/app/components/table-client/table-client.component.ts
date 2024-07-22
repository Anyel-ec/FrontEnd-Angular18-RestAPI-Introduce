import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../models/client.model';

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
      this.loadClients(); // Reload the client list
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  }
}
