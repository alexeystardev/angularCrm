import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-fire',
  templateUrl: './play-fire.component.html',
  styleUrls: ['./play-fire.component.css']
})
export class PlayFireComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  }


  setDataToFirebase():void{
	  // Add a second document with a generated ID.
			this.db.collection("users").add({
				first: "Alan",
				middle: "Mathison",
				last: "Turing",
				born: 1912
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
  }



getDataFromFirebase(){
	this.db.firestore.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data().last);
    });
});
}


}
