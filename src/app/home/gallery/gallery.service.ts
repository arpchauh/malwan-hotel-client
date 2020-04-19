import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  galleryImage = {} as photos;
  constructor() {}
}

export interface photos {
  img: string;
  place: string;
}
