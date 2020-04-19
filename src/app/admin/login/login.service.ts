import { Injectable } from "@angular/core";
import { RegisterModel } from "./login.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  loginObj = {} as login;

  constructor(private http: HttpClient) {}
  getLoggedIn() {
    console.log(this.loginObj);
    const url = "https://app-hotel-api.herokuapp.com/user/login";
    return this.http.post<RegisterModel.RootObject>(url, this.loginObj);
  }
}

export interface login {
  email: string;
  password: string;
}
