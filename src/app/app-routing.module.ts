import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelDescriptionComponent } from "./home/hotel-description/hotel-description.component";
import { RoomsComponent } from "./home/rooms/rooms.component";
import { HeaderComponent } from "./home/header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./admin/login/login.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    component: HomeComponent,
    children: [
      {
        path: "home",
        component: AdminHomeComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
