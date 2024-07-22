import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { error } from 'console';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [ClientService],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss',
})
export class AddClientComponent {
  public nombre: string = '';
  public cedula: string = '';
  public telefono: string = '';
  public correo: string = '';
  public direccion: string = '';

  constructor(private clientService: ClientService) {}

  async saveCliente() {
    try {
      let newClient = this.buildAndGetNewClientObject();
      await this.clientService.saveClient(newClient);
      console.log("Guardado")
    } catch (err) {
      console.log(err);
    }
  }
  buildAndGetNewClientObject() {
    let newClient = {
      nombre: this.nombre,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
    };
    return newClient;
  }
}
