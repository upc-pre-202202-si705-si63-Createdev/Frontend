import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/Usuarios/usuarios.component';
import { UsuariosCreaeditaComponent } from './page/Usuarios/usuarios-creaedita/usuarios-creaedita.component';

const routes: Routes = [{
  path:'usuario', component: UsuariosComponent,children:[
    { path: 'nuevo', component: UsuariosCreaeditaComponent },
    { path: 'edicion/:id', component: UsuariosCreaeditaComponent}

  ]
}];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
