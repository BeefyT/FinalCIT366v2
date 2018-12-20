import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistAddComponent } from './todolist-add/todolist-add.component';
import { TodolistGetComponent } from './todolist-get/todolist-get.component';
import { TodolistEditComponent } from './todolist-edit/todolist-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ItemService} from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistAddComponent,
    TodolistGetComponent,
    TodolistEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
