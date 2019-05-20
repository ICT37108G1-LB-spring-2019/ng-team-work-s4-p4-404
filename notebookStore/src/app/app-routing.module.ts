import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { NoteBListComponent } from "./note-blist/note-blist.component";
import { LaptopsDetailedComponent } from "./laptops-detailed/laptops-detailed.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddFormComponent } from "./add-form/add-form.component";

const routes: Routes = [
  {
    path: "notebooks",
    component: NoteBListComponent
  },
  {
    path: "notebooks/:id",
    component: LaptopsDetailedComponent
  },
  { path: "", redirectTo: "/notebooks", pathMatch: "full" },
  {
    path: "admin",
    component: AdminPanelComponent,
    children: [{ path: "new", component: AddFormComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
