import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteBListComponent } from './note-blist/note-blist.component';
import { NoteBItemComponent } from './note-bitem/note-bitem.component';
import {RequestService} from './request.service'
import { HttpClientModule } from '@angular/common/http';
import { LaptopsDetailedComponent } from './laptops-detailed/laptops-detailed.component';
import { LaptopdetailedinfoComponent } from './laptopdetailedinfo/laptopdetailedinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteBListComponent,
    NoteBItemComponent,
    LaptopsDetailedComponent,
    LaptopdetailedinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
