const charSet = [
  ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~"
];

let passwordEl1 = document.querySelector("#passOne");
let passwordEl2 = document.querySelector("#passTwo");

let passwords = [passwordEl1, passwordEl2];

function passwordGenerator() {
    for(let k=0; k<2; k++) {
        let password = "";
        for(let i=0; i<12; i++) {
            let random = Math.floor(Math.random() * charSet.length);
            password += charSet[random];
        }
        passwords[k].textContent = password;
    }
}