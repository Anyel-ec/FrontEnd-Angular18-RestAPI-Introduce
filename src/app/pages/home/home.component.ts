import { Component } from '@angular/core';
import { TableClientComponent } from '../../components/table-client/table-client.component';
import { AddClientComponent } from "../../components/add-client/add-client.component";
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableClientComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
