import { Component, OnInit } from '@angular/core';
import {RequestService}  from '../request.service';
import {request} from '../interface'
@Component({
  selector: 'app-note-blist',
  templateUrl: './note-blist.component.html',
  styleUrls: ['./note-blist.component.css']
})
export class NoteBListComponent implements OnInit {
arr:request[] = [];
  constructor(private ntb:RequestService) { }




  ngOnInit() {
this.ntb.get() 
              .subscribe( data => this.arr =  data);


  }

}
