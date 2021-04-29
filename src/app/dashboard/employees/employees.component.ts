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

//   addStaticEmp():void{
// 	  // Add a second document with a generated ID.
// 			this.afs.collection("employees").add({
// 				fullName: "Alan Shmidth",
// 				role: "Administrator",
// 				email: "alan@google.com",
// 				phone: ["0543080021"],
// 				bday: "05/01/90"
// 			})
// 			.then((docRef) => {
// 				console.log("Document written with ID: ", docRef.id);
// 			})
// 			.catch((error) => {
// 				console.error("Error adding document: ", error);
// 			});
//   }

}
