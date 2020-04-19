export module RegisterModel {
  export interface RootObject {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    __v: number;
    success: number;
  }
}
