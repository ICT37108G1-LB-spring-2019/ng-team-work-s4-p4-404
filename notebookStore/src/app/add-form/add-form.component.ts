import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private req:RequestService) { }
onSubmit(value){
this.req.update(value).subscribe();

}
  ngOnInit() {
  }

}
