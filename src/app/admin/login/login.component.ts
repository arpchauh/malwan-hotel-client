import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submit = false;
  email: string;
  password: string;

  LoginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get formData() {
    return this.LoginForm.controls;
  }

  onSubmit() {
    // console.log(this.LoginForm);
    this.submit = true;

    // this.LoginForm = new FormGroup({
    //   email: new FormControl(""),
    //   password: new FormControl(""),
    // });

    console.log(this.submit);
    this.loginService.loginObj.email = this.LoginForm.value.email;
    this.loginService.loginObj.password = this.LoginForm.value.password;

    this.loginService.getLoggedIn().subscribe((res) => {
      console.log(res);
      if (res.success === 1) {
        this.route.navigateByUrl("/admin/home");
      } else {
        alert("Enter Valid Details");
      }
    });
  }
}
