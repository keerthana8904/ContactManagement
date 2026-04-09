let saveButn = document.getElementById("saveBtn"); // click - saves to array & localStorage
let showContacts = document.getElementById("container");

// get from local storage and save here - localstorage is string so parse 
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let searchedContacts =  [];;

function searchContact(){

  showContacts.innerHTML = "";

  let searchByName = document.getElementById("searchName").value.trim();
  searchedContacts = contacts.filter((contact)=>contact.fname.toLowerCase().includes(searchByName.toLowerCase()));
  
  if(searchedContacts.length === 0){
    alert("contact not found");
    return;
  }

  if (searchByName === "") {
    render.call(contacts);
    return;
}

  // localStorage.setItem("searchedContacts", JSON.stringify(searchedContacts));
  render.call(searchedContacts);
}
let serachButton = document.getElementById("searhBtn");
serachButton.addEventListener("click",searchContact);

// create contact:
function createContact(){
    let First = document.getElementById("Fname");
    let Sur = document.getElementById("Sname");
    let phoneInput = document.getElementById("cphone");

    let FirstName = First.value.trim();
    FirstName = FirstName.charAt(0).toUpperCase() + FirstName.slice(1);
    let SurName = Sur.value.trim();
    let phone = phoneInput.value.trim();

    
    if (FirstName === "" || phone === "") {
        alert("First name and phone are required");
         return;
    }

    let exists = contacts.some(c => c.phone === phone);
    if (exists) {
      alert("Phone number already exists!");
      return; 
    }
    
    let newCont ={
        id: Date.now(),
        fname: FirstName,
        sname: SurName,
        phone:phone
    }

    contacts.push(newCont);
    console.log(contacts);

    // save newcontact to localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));
    render.call(contacts); 
 
    First.value = "";
    Sur.value = "";
    phoneInput.value = "";
} 

function showAllContacts(){
  showContacts.innerHTML = "";
  render.call(contacts);
}

let showAllC = document.getElementById("showAll");
showAllC.addEventListener("click",showAllContacts);

function render(){
    showContacts.innerHTML = "";

    this.forEach((contact,index)=>{
        // each contact
       if (this.length === 0) {
        showContacts.innerHTML = "<p>No contacts found</p>";
        return;
      }
        let childcont = document.createElement("div");

        let inputContainer = document.createElement("div");
        inputContainer.innerHTML = `<p>${contact.fname}  ${contact.sname}</p> 
                                 
                                    <p>${contact.phone}</p>`;

        let btns = document.createElement("div");

        let editBtn = document.createElement("button");  
        editBtn.textContent = "Edit";    

        let dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete";

        btns.appendChild(editBtn);
        btns.appendChild(dltBtn);

        childcont.appendChild(inputContainer);
        childcont.appendChild(btns);

        showContacts.appendChild(childcont);

      //   editBtn.addEventListener("click",()=>{
      //   let newFname = prompt("Enter new First Name:");
      //   let newlname = prompt("Enter new last Name:");
      //   let newPhone = prompt("Enter new Phone Number:");

      //   if(newFname !== "") contact.fname = newFname;
      //   if(newlname !== "") contact.sname = newlname;
      //   if(newPhone !== "") contact.phone = newPhone;

      //   localStorage.setItem("contacts", JSON.stringify(contacts));
      //   render.call(contacts);

      // })

    editBtn.addEventListener("click", () => {
    inputContainer.innerHTML = "";

    // create input fields
    let fnameInput = document.createElement("input");
    fnameInput.value = contact.fname;

    let snameInput = document.createElement("input");
    snameInput.value = contact.sname;

    let phoneInput = document.createElement("input");
    phoneInput.value = contact.phone;

    // save button
    let saveEditBtn = document.createElement("button");
    saveEditBtn.textContent = "Save";

    // append inputs
    inputContainer.appendChild(fnameInput);
    inputContainer.appendChild(snameInput);
    inputContainer.appendChild(phoneInput);
    inputContainer.appendChild(saveEditBtn);

    // save updated values
        saveEditBtn.addEventListener("click", () => {
        contact.fname = fnameInput.value.trim();
        contact.sname = snameInput.value.trim();
        contact.phone = phoneInput.value.trim();

        localStorage.setItem("contacts", JSON.stringify(contacts));

        render.call(contacts);
    });
});

      dltBtn.addEventListener("click",()=>{
        
        // from the index ,only 1 ele delete
        contacts.splice(index,1);

        localStorage.setItem("contacts", JSON.stringify(contacts));
        render.call(contacts);

      })

      
        
    })


}

// localStorage.clear();
render.call(contacts); 
saveButn.addEventListener("click",createContact);
