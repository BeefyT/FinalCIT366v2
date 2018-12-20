import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  uri = 'http://localhost:4000/todolist';

  constructor(private http: HttpClient) { }

  addItem(name, description, importance) {
    const obj = {
      name: name,
      description: description,
      importance: importance
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getItems() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editItem(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateItem(name, description, importance, id) {

      const obj = {
          name: name,
          description: description,
          importance: importance
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteItem(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }

}
