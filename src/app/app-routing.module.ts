import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './pages/console/console.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'mapa', component: MapComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'console', component: ConsoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
