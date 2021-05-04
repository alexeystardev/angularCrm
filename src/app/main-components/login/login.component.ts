import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup

  constructor(private loginServ:LoginService, private spinner: SpinnerService) { }

  ngOnInit(): void {
	   this.form = new FormGroup({
		  email: new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
		  password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
		//   checkbox: new FormControl(false, Validators.requiredTrue)
	  })
  }
  check:boolean =true;
  errorMessage=''


  login(email: string, password: string){
	  this.spinner.showOrHideSpinner(true)
    this.loginServ.loginWithEmailPassword(email,password).catch((err)=>{
      this.errorMessage=err
		this.spinner.showOrHideSpinner(false)
    })
  }

}
