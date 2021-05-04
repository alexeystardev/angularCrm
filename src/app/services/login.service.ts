import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router, private spinner:SpinnerService) { }

  user:any=null

  loginWithEmailPassword(email: string, password: string){

    return new Promise(async (resolve, reject) => {
	this.spinner.showOrHideSpinner(true)
      this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.router.navigate(['dashboard/customers'], { relativeTo: this.route });
		this.spinner.showOrHideSpinner(false)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage)
      });

      // try {
      //   const user=await this.auth.signInWithEmailAndPassword(email, password)
      // } catch (error) {
      //   var errorMessage = error.message;
      //   reject(errorMessage)
      // }


    })
   
  }

  checkIfUserLogin():Promise<boolean>{
    return new Promise(async (resolve, reject) => {
            if (this.user) {
              resolve(true)
              return
            }
            this.auth.onAuthStateChanged((user) => {
              if (user) {
                // console.log(user)
                this.user=user
                resolve(true)
              } else {
                this.user=null
                this.router.navigate(['login'], { relativeTo: this.route });
                resolve(false)
              }
            });
    })
    

    
    
  }

  // checkIfUserLoginV2(){
  //   var user = this.auth.currentUser;

  //   if (user) {
  //     console.log(user)
  //   } else {
  //     // No user is signed in.
  //     console.log("No user")
  //   }

  // }


  getUserEmail(){
    if ( this.user && this.user.email){
      return this.user.email
    }
    return ''
  }

  logOut(){
    this.auth.signOut()
  }
}
