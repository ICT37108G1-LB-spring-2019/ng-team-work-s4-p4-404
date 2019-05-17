import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {request} from './interface'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

get(){
return this.http.get<request[]>('http://localhost:3000/laptops');
}




}


