import { Routes } from '@angular/router';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';

export const routes: Routes = [
  {
    path: 'buscar-cliente',
    component: SearchClientComponent,
  },
  {
    path: 'insertar-cliente',
    component: AddClientComponent,
  },
];
