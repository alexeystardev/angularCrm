import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router, private zone: NgZone) { }

  user:any=null

  loginWithEmailPassword(email: string, password: string){

    return new Promise(async (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.router.navigate(['dashboard/customers'], { relativeTo: this.route });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage)
      });
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
				  this.zone.run(() => {
                this.router.navigate(['login'], { relativeTo: this.route });
				  });
                resolve(false)
              }
            });
    })
  }

  getUserEmail(){
    if ( this.user && this.user.email){
      return this.user.email
    }
    return ''
  }

	logOut(){	  
		this.auth.signOut()
		window.location.reload();
  }
}
