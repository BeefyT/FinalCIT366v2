import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-todolist-edit',
  templateUrl: './todolist-edit.component.html',
  styleUrls: ['./todolist-edit.component.css']
})
export class TodolistEditComponent implements OnInit {

  angForm: FormGroup;
  item: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private is: ItemService,
    private fb: FormBuilder) { 
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
          name: ['', Validators.required ],
          description: ['', Validators.required ],
          importance: ['', Validators.required ]
        });
      }

      ngOnInit() {
        this.route.params.subscribe(params => {
            this.is.editItem(params['id']).subscribe(res => {
              this.item = res;
          });
        });
      }

      updateItem(name, description, importance) {
        this.route.params.subscribe(params => {
           this.is.updateItem(name, description, importance, params['id']);
           this.router.navigate(['todolist']);
     })};



}
