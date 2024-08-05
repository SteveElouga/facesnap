import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token: string | null = null;

  getToken(): string | null {
    return this.token;
  }

  login(){
    this.token = "MyFakenToken";
  }
}
