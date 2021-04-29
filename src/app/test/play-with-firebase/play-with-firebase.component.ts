import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-play-with-firebase',
  templateUrl: './play-with-firebase.component.html',
  styleUrls: ['./play-with-firebase.component.css']
})
export class PlayWithFirebaseComponent implements OnInit,OnDestroy {

  subscribeCities:any
  constructor(private db: AngularFirestore) { }
  
  ngOnDestroy(): void {
   this.subscribeCities()
  }

  ngOnInit(): void {
    // this.setDataToFirebase()
    this.getUpdateFromCollection()
  }

  getUpdateFromCollection(){
    var cities = [];
    this.subscribeCities=this.db.firestore.collection("cities").where("state", "==", "CA")
    .onSnapshot((querySnapshot) => {
     
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: "+new Date().getTime(), cities.join(", "));
    });
  }

  setDataToFirebase(): void {
    var citiesRef = this.db.collection("cities");

    // citiesRef.doc("SF").set({
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 860000,
    //     regions: ["west_coast", "norcal"] });
    citiesRef.doc().set({
          name: "San Francisco2", state: "CA", country: "USA",
          capital: false, population: 860000,
          regions: ["west_coast", "norcal"] });
    // citiesRef.doc("LA").set({
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    // citiesRef.doc("DC").set({
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    // citiesRef.doc("TOK").set({
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    // citiesRef.doc("BJ").set({
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });

}

updateDataToFirebase(){
  const docRef=this.db.firestore.collection("users").doc()
  console.log(docRef.id)
  docRef.set({
    id:docRef.id,
    first: "Gena",
      middle: "-",
      last: "Utkin",
      born: 2020
},{merge: true})
.then((docRef) => {
    console.log("Document written with ID: ", docRef);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

getDataToFirebase(){
  this.db.firestore.collection("cities").where("state", "==", "CA").where("population", "<", 8600000)
    .get()
    .then((querySnapshot) => {
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


//   const users= this.db.firestore.collection("users")
//   users.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
// });

// var alovelaceDocumentRef = this.db.firestore.collection('users').doc('7TWjtyrZWoAReygBgndi');
// alovelaceDocumentRef.get().then(doc=>{
//   console.log('------------------')
//   console.log(doc.data())

// }).catch((error) => {
//   console.error("Error adding document: ", error);
// });

// const docId='7TWjtyrZWoAReygBgndi'
// var alovelaceDocumentRef = this.db.firestore.doc('users/'+docId);
// alovelaceDocumentRef.get().then(doc=>{
//   console.log('------------------')
//   console.log(doc.data())

// }).catch((error) => {
//   console.error("Error adding document: ", error);
// });

}

deleteDataToFirebase(){
  this.db.collection("users").doc("7TWjtyrZWoAReygBgndi").delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}


  }

