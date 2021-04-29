import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterContentInit {

closeResult: string; 	
custDetail;
customerDelete;

  constructor(private ds:DbServiceService,private spinner:SpinnerService,private router:Router,private route: ActivatedRoute, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngAfterContentInit(): void {
    this.getAllCustomers()
  }

  customersArrayData: Customer[] =[]
  customers: Customer[] =[]
  ngOnInit(): void {
    
  }

  showCustomer(customer: Customer){
      const custerId = customer.id
      this.router.navigate([custerId],{ relativeTo: this.route });
  }

detailsCustomer(customer: Customer){
      const custerDetail = customer.id
	  console.log(custerDetail)
	   this.router.navigate([custerDetail],{ relativeTo: this.route });
  }

 open(targetModal, custDetail) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
  this.custDetail = custDetail
 }

remove(content, customerDelete) {  
	this.customerDelete=customerDelete;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
      if (result === 'yes') {  
        this.deleteCustomer(customerDelete.id);  
      }  
    }, (reason) => {  
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    });  
  }  
  
  private getDismissReason(reason: any): string {  
    if (reason === ModalDismissReasons.ESC) {  
      return 'by pressing ESC';  
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      return 'by clicking on a backdrop';  
    } else {  
      return `with: ${reason}`;  
    }  
  }  

   deleteCustomer(customerDelete) {  
     this.ds.removeCustomer(customerDelete)
  }  

  searchChanged(str:string){
    str=str.toLowerCase()
    this.customers=new Customer().searchInCustomersArray(this.customersArrayData,str)
  }

  getAllCustomers(){
    this.spinner.showOrHideSpinner(true)
    this.ds.getAllCustomer()
    .then(()=>{
      this.spinner.showOrHideSpinner(false)
    }).catch((err)=>{
      console.log(err)
    })
    this.ds.customersStatus.subscribe((arr:Customer[])=>{
      this.customersArrayData=arr
      this.searchChanged('')
    })
  }

}
