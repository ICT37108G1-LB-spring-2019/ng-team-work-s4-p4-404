import { Component, OnInit,Input } from '@angular/core';
import {RequestService} from '../request.service'
@Component({
  selector: 'app-admin-detailed',
  templateUrl: './admin-detailed.component.html',
  styleUrls: ['./admin-detailed.component.css']
})
export class AdminDetailedComponent implements OnInit {
@Input() data;
  constructor(private ser:RequestService) { }
onclick(id){
this.ser.delete(id).subscribe();

}
  ngOnInit() {
  }

}
