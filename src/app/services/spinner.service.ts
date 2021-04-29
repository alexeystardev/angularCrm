import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerStatus = new BehaviorSubject<boolean>(false);
  constructor() { }

  showOrHideSpinner(status:boolean){
    this.spinnerStatus.next(status)
    }
}
