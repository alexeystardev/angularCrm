import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'companyCrm';
  showSpinner:boolean = false;
  constructor(private spinnerSer:SpinnerService ) { 
  }
  ngAfterViewInit(): void {
    this.spinnerSer.spinnerStatus.subscribe((val)=>{
      setTimeout(() => {
        this.showSpinner=val
      }, 1);
      })
  }

  ngOnInit(): void {
    
  }
    
}
