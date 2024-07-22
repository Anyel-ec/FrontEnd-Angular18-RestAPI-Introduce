import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [ClientService],
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.scss'
})
export class TableClientComponent {
  public clients: any[] = [];
  public selectedClient: any = null;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.loadClients();
  }

  async loadClients() {
    try {
      this.clients = await this.clientService.getAllClients() as any[];
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  }

  async deleteClient(id: number) {
    try {
      await this.clientService.deleteClient(id);
      this.loadClients(); // Reload the client list after deletion
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  }

  selectClient(client: any) {
    this.selectedClient = { ...client }; // Create a copy of the selected client
  }

  async updateClient() {
    if (this.selectedClient) {
      try {
        await this.clientService.updateClient(this.selectedClient.id, this.selectedClient);
        this.loadClients(); // Reload the client list after update
        this.selectedClient = null; // Clear the selected client
      } catch (error) {
        console.error('Error al actualizar cliente:', error);
      }
    }
  }

}
