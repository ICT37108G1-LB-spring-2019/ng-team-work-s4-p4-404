import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute} from '@angular/router';
import { NoteBListComponent } from './note-blist/note-blist.component';
import { LaptopsDetailedComponent } from './laptops-detailed/laptops-detailed.component';

const routes: Routes = [
{
path:'notebooks',component:NoteBListComponent
},
{
path:'notebooks/:id', component:LaptopsDetailedComponent
},
{path: '', component: NoteBListComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
