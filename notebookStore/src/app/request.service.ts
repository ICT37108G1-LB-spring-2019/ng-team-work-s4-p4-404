import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { request } from "./interface";
@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<request[]>("http://localhost:3000/laptops");
  }

  info(elem) {
    const id = Number(elem);
    const url = `${"http://localhost:3000/laptops"}/${id}`;
    return this.http.get<request[]>(url);
  }

  delete(id) {
    const url = `${"http://localhost:3000/laptops"}/${id}`;
    this.http.get(url).subscribe();
    return this.http.delete(url);

  }
  update(obj) {
    return this.http.post("http://localhost:3000/laptops", obj);
  }
}
