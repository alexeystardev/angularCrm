export class Customer {
    firstName:string="";
    lastName:string=""
    email:string=""
    phoneNumber:string=""
    address:string=""
    notes:string=""
    private _id:string=""
    timestamp:number=new Date().getTime()

    toFirestore():any{
        return {
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            phoneNumber:this.phoneNumber,
            address:this.address,
            notes:this.notes,
            id:this._id,
            timestamp:this.timestamp
        }
    }
    constructor(
    id:string="",
    firstName:string="",
    lastName:string="",
    email:string="",
    phoneNumber:string="",
    address:string="",
    notes:string="",
    timestamp:number=new Date().getTime()){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.notes=notes;
        this.timestamp=timestamp;

    }

    searchInCustomersArray(customers:Customer[],str:string){
        return customers.filter((elem)=> {
            return (elem.firstName.toLowerCase().includes(str) || elem.lastName.toLowerCase().includes(str) || elem.email.toLowerCase().includes(str)
             || elem.phoneNumber.toLowerCase().includes(str) || elem.address.toLowerCase().includes(str) || elem.notes.toLowerCase().includes(str))
          });
    }

    checkIfEmpty(){
        if (
            this.firstName=="" ||
            this.lastName=="" || 
            this.email=="" ||
            this.phoneNumber=="" ||
            this.address==""
           
        ){
            return true
        }
        return false
    }
    fromFirestore(doc):Customer{
        return new Customer(doc.id,
            doc.data().firstName,
            doc.data().lastName,
            doc.data().email,
            doc.data().phoneNumber,
            doc.data().address,
            doc.data().notes,
            doc.data().timestamp ? doc.data().timestamp : new Date().getTime()
            )
    }

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

}  