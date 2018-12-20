import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-todolist-add',
  templateUrl: './todolist-add.component.html',
  styleUrls: ['./todolist-add.component.css']
})
export class TodolistAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private is: ItemService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      importance: ['', Validators.required ]
    });
  }

  addItem(name, description, importance) {
    this.is.addItem(name, description, importance);
  }

  ngOnInit() {
  }

}
