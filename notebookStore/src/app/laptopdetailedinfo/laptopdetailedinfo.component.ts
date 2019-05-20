import { Component, OnInit, Input } from "@angular/core";
import { RequestService } from "../request.service";
@Component({
  selector: "app-laptopdetailedinfo",
  templateUrl: "./laptopdetailedinfo.component.html",
  styleUrls: ["./laptopdetailedinfo.component.css"]
})
export class LaptopdetailedinfoComponent implements OnInit {
  @Input() ids;
  datas: object;
  constructor(private req: RequestService) {}
  ngOnInit() {
    this.req.info(this.ids).subscribe(data => {
      this.datas = data;
    });
  }
}
