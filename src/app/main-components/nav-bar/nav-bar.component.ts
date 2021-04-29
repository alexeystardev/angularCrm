import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private ls:LoginService) { }

  email: string=''
  ngOnInit(): void {
    this.getUserInfo()
  }

  getUserInfo(){
    this.email=this.ls.getUserEmail()
    
  }

  logOut(){
    this.ls.logOut()
  }
}
