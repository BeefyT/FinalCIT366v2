import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item';


@Component({
  selector: 'app-todolist-get',
  templateUrl: './todolist-get.component.html',
  styleUrls: ['./todolist-get.component.css']
})
export class TodolistGetComponent implements OnInit {

  items: Item[];

  constructor(private is: ItemService) { }

  ngOnInit() {
    this.is
      .getItems()
      .subscribe((data: Item[]) => {
        this.items = data;
    });
  }

  deleteItem(id) {
    this.is.deleteItem(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
