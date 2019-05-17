import { Component, OnInit,Input } from '@angular/core';
import {RequestService} from '../request.service'
@Component({
  selector: 'app-laptopdetailedinfo',
  templateUrl: './laptopdetailedinfo.component.html',
  styleUrls: ['./laptopdetailedinfo.component.css']
})
export class LaptopdetailedinfoComponent implements OnInit {
@Input() ids;
dat = [];

  constructor(private req:RequestService) { }

  ngOnInit() {
this.req.get().subscribe(data => {
for(let i =0;i<data.length;i++){
if(data[i].id == this.ids){
this.dat.push(data[i]);


}


}


});

  }

}
