class contact{
    constructor(firstName, lastName, phoneNumber, emailAddress ){
        this.fullName = firstName+" "+lastName;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress
    }
}
function createContactList(){
 var contactList = [];
 var contact1 = new contact("Misbaudee", "Hassan", 08122263858, "hassanmisbaudeena@gmail.com");  
 var contact2 = new contact("Ojo", "Ben", 08140420211, "benjo@gmail.com");  
 contactList.push(contact1,contact2);
 return contactList;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}
var myContactList = createContactList();
console.log(myContactList);
