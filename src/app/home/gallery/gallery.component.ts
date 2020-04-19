import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GalleryService } from "./gallery.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  Photos = [
    {
      img: "https://i.ibb.co/pzjncwt/Sindhudurg-Airport.jpg",
      place: "Sindudurg Airport"
    },
    {
      img: "https://i.ibb.co/qWJ3B0h/sindhudurg-fort.jpg",
      place: "Sindudurg Fort"
    },
    {
      img: "https://i.ibb.co/F40pWQF/Scuba.jpg",
      place: "Scuba Diving Tarkarli"
    },
    {
      img: "https://i.ibb.co/7p0QRHb/Rock-Beach.jpg",
      place: "Rock Beach"
    },
    {
      img: "https://i.ibb.co/bvbzT96/Dandi-Beach.jpg",
      place: "Dandi Beach"
    },
    {
      img: "https://i.ibb.co/bHkjhzr/Wairy-Ubhatwadi-Beach.jpg",
      place: "Wairy-Ubhatwadi Beach"
    },
    {
      img: "https://i.ibb.co/37DQXBG/download.jpg",
      place: "Tarkarli Beach"
    }
  ];

  constructor(private route: Router, private galleryService: GalleryService) {}

  ngOnInit() {
    this.route.navigateByUrl("");
  }
}
