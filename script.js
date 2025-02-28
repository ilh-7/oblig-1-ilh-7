//TODO: add on load/ready functionality
document.addEventListener("DOMContentLoaded", () => {
   console.log("ready!");

   //hente bøker og kontainere
   const books=document.querySelectorAll(".book");
   const spellBookContainer= document.getElementById("book-view");
   const spellPages= document.querySelectorAll(".spell-page");
   const closeButton=document.getElementById("close-tome");

   //hente kontaineren som inneholder bøker
   const booksContainer=document.querySelector(".books-container");


   
   function openSpellBook(bookId){
      console.log("Open spellbook:", bookId);

      //skjul bok-kontainer
      booksContainer.classList.add("hidden");
      //vis bok-container
      spellBookContainer.classList.remove("hidden");
      //skjul alle spell books
      spellPages.forEach((page)=> page.classList.add("hidden"));

      //vis den rikitge spell boken
      const selectedBook= document.getElementById(bookId);
      if (selectedBook){
         selectedBook.classList.remove("hidden");
      } else{
         console.log("Book not found:", bookId);
      }
   }
   //legg til event listeners på bøker
   books.forEach((book) => {
      book.addEventListener("click", () => {
          const bookId = book.id.replace("-cover", ""); // Fjerner "-cover" fra ID
          openSpellBook(bookId);
      });
  });

  // Lukk alle spell books når "Close Tome" klikkes
  closeButton.addEventListener("click", () => {
      console.log("Closing all spell books...");
      //skjul spell book-containeren
      spellBookContainer.classList.add("hidden");
      //vis bok-containeren igjen
      booksContainer.classList.remove("hidden");
      //skjul alle spell books
      spellPages.forEach((page) => page.classList.add("hidden"));
  });
// 3. change password
  const passwordForm= document.getElementById("change-password-form");

  passwordForm.addEventListener("submit", (event) =>{

   event.preventDefault();

   const username= document.getElementById("username").value;
   const newPassword=document.getElementById("new-password").value;
   const confirmPasssword=document.getElementById("confirm-password").value;

   if (newPassword !== confirmPasssword) {
      alert("Error: password do not match!");
   } else {
      alert(`Success! The password for ${username} has been changed.`)
   }
  });
  // 4. Change name 
  const nameForm= document.getElementById("rename-wizard-form");

  nameForm.addEventListener("submit", (event) => {
   event.preventDefault();

   const wizardName= document.getElementById("wizard-name").value;
   const wizardTitle= document.getElementById("wizard-title").value;

   //Hvis verdiene ikke blir tastet inn
   if (!wizardName || !wizardTitle){
      alert("Please enter both a wizard name and title!");
      return;
   }

   //Make the change persist by using the localStorage 
   localStorage.setItem("WizardName", wizardName);
   localStorage.setItem("WizardTitle", wizardTitle);

    //update the wizard´s name in the header
    document.querySelector("h1").innerText=`Welcome to The MagiScript Library of ${wizardName} the ${wizardTitle}.`;

   alert(`You are now known as ${wizardName} the ${wizardTitle}.`);
  });


  //Summon familiar form handling

  const summonForm= document.getElementById("summon-form");

  summonForm.addEventListener("submit", (event) => {
   event.preventDefault();

   const familiarName= document.getElementById("familiar-name").value;
   const familiarType = document.getElementById("familiar-type").value;
   const hasWings = document.getElementById("has-wings").checked;
   const wingsType = document.getElementById("wings-type").value;
   const mood = document.getElementById("mood").value;
   const contractEnd = document.getElementById("contract-end").value;

   let traits = [];
   document.querySelectorAll('#summon-form input[type="checkbox"]:checked').forEach((checkbox) => {
      traits.push(checkbox.value);
   });

   let description = `You have summoned: ${familiarName}, a ${familiarType}`;
   if (hasWings) {
       description += ` with ${wingsType} wings`;
   }
   if(traits.length > 0) {
      description += `. It has the following traits: ${traits.join(", ")}`;
   }
   description += `. It appears to be ${mood}. The contract ends on ${contractEnd}.`;

   alert(description); //fjerne denne kanskje
  });

//Show/Hide wings type input ////
  const wingsCheckbox=document.getElementById("has-wings");
  const wingsTypeContainer=document.getElementById("wings-type-container");

  wingsCheckbox.addEventListener("change", () => {
   if (wingsCheckbox.checked) {
      wingsTypeContainer.classList.remove("hidden");
   } else {
      wingsTypeContainer.classList.add("hidden");
   }
  });
  const wizardNameDisplay= document.getElementById("wizard-name-display");
  const savedWizardName= localStorage.getItem("Wizardname");
  const saveWizardTitle= localStorage.getItem("WizarTitle");
  if (savedWizardName && saveWizardTitle){
   wizardNameDisplay.innerText= `${savedWizardName} the ${savedWizardTitle}`;
  }
});
//TODO: add functionality to open the correct spell books
//function openSpellBook(){
   //console.log("How do you find the right spellbook?!")
//TODO: add functionality to change password
//TODO: add functionality to change name
//TODO: add functionality to summon familiar
// have a function where you can load content into a "user array" -> easier to work with
