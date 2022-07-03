const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];
let passwords = [];

let pass1El = document.querySelector("#password1-el");
let pass2El = document.querySelector("#password2-el");
let pass3El = document.querySelector("#password3-el");
let pass4El = document.querySelector("#password4-el");

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return randomIndex;
}

// function generatePassword() {
//   let password = [];
//   for (let i = 0; i < 15; i++) {
//     password.push(characters[getRandomIndex()]);
//   }
//   return password.join("");
// }

function generatePasswords() {
  for (let i = 0; i < 4; i++) {
    let password = ""
    for (let j = 0; j < 15; j++) {
      password += characters[getRandomIndex()];
    }
    passwords.push(password);
  }
  pass1El.textContent = passwords[0];
  pass2El.textContent = passwords[1];
  pass3El.textContent = passwords[2];
  pass4El.textContent = passwords[3];
}

