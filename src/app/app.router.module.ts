import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from '@modules/ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from '@modules/ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from '@modules/ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from '@modules/ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
