import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from 'src/app/models/employees.model';
import { DbServiceService } from 'src/app/services/db-service.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

	emps: Employee[]=[];

  constructor(private ds:DbServiceService, private afs: AngularFirestore) { }
 
  searchStr;
  ngAfterContentInit(): void {
    this.ds.getEmployees()
  }

  ngOnInit(): void {
	  this.ds.getEmployees().subscribe(emps => {
		  this.emps=emps;
	  })
  }



// Just for create Employees for test

//   addStaticEmp():void{
// 	  // Add a second document with a generated ID.
// 			this.afs.collection("employees").add({
// 				fullName: "Sebastian Fox",
// 				role: "Help Desk",
// 				email: "Sebastian@google.com",
// 				phone: ["042558150"],
// 				bday: "22/05/85"
// 			})
// 			.then((docRef) => {
// 				console.log("Document written with ID: ", docRef.id);
// 			})
// 			.catch((error) => {
// 				console.error("Error adding document: ", error);
// 			});
//   }

}
