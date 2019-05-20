import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {request} from '../interface'
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
dat:request[] = [];

constructor(private ser:RequestService) { }
ngOnInit() {
this.ser.get().subscribe(data =>{
this.dat = data;


}

);








}
}
