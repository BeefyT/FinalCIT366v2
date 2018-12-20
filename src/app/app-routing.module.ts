import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodolistAddComponent} from './todolist-add/todolist-add.component';
import {TodolistEditComponent} from './todolist-edit/todolist-edit.component';
import {TodolistGetComponent} from './todolist-get/todolist-get.component';


const routes: Routes = [
  {
    path: 'todolist/create',
    component: TodolistAddComponent
  },
  {
    path: 'todolist/edit/:id',
    component: TodolistEditComponent
  },
  {
    path: 'todolist',
    component: TodolistGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
