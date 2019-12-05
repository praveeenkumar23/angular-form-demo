import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TempleteComponent } from './templete/templete.component';
import { ButtonComponent } from './button/button.component';
import { ReactformComponent } from './reactform/reactform.component';
import { ReactiveDataComponent } from './reactive-data/reactive-data.component';


const routes: Routes = [
{path:'',component:ButtonComponent},
{path :'button' ,component:ButtonComponent},
{path :'home' ,component:HomeComponent},
{path: 'templete',component: TempleteComponent},
{path: 'react',component:ReactformComponent},
{path: 'reactive-data', component:ReactiveDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
