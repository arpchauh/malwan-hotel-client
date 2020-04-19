import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./home/header/header.component";
import { HotelDescriptionComponent } from "./home/hotel-description/hotel-description.component";
import { FooterComponent } from "./home/footer/footer.component";
import { GalleryComponent } from "./home/gallery/gallery.component";
import { RoomsComponent } from "./home/rooms/rooms.component";
import { LoginComponent } from "./admin/login/login.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelDescriptionComponent,
    FooterComponent,
    GalleryComponent,
    RoomsComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
