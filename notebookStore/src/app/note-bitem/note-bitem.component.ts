import { Component, OnInit,Input} from '@angular/core';
import {request} from '../interface'
@Component({
  selector: 'app-note-bitem',
  templateUrl: './note-bitem.component.html',
  styleUrls: ['./note-bitem.component.css']
})
export class NoteBItemComponent implements OnInit {
@Input() arrs:request[];
  constructor() { }

  ngOnInit() {
  }

}
