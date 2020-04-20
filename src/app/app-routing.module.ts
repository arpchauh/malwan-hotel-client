import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./admin/login/login.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "home",
        component: AdminHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
