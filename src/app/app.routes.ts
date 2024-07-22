import { Routes } from '@angular/router';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { HomeComponent } from './pages/home/home.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';

export const routes: Routes = [
  {
    path: 'buscar-cliente',
    component: SearchClientComponent,
  },
  {
    path: 'insertar-cliente',
    component: AddClientComponent,
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'editar-cliente/:id', // Añade la ruta para editar cliente
    component: EditClientComponent,
  },
];
