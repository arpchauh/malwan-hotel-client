import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoomsService } from "./rooms.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {
  roomDetails = [
    {
      img: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      heading: "AC Room",
      price: "2000/-",
      bedsize: "Double Bed"
    },
    {
      img: "https://i.ibb.co/LZK95PG/malavan-room-2.jpg",
      heading: "Non AC Room",
      price: "1200/-",
      bedsize: "Double Bed"
    },
    {
      img: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      heading: "AC Room",
      price: "2000/-",
      bedsize: "Double Bed"
    }
  ];

  constructor(private route: Router, private roomsService: RoomsService) {}

  ngOnInit() {
    this.route.navigateByUrl("");
  }
}
