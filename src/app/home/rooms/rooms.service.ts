import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoomsService {
  details = [] as roomDetails[];

  constructor() {}
}

export interface roomDetails {
  img: string;
  heading: string;
  price: string;
  bedsize: string;
}
