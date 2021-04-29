import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private ls: LoginService) {}

  async canActivate(
    
  ): Promise<boolean> {
     const status=await this.ls.checkIfUserLogin()
     return status;
    
  }
}