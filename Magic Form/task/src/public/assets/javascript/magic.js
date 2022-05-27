let form = document.getElementById("current-form");
let button = document.getElementById("submit-button");
let arrayNames = ["first-name", "last-name", "email", "phone", "company", "address"];
let users = JSON.parse(localStorage.getItem('savedUserInfo')) || Array();

function savingData(event) {
    event.preventDefault();
    for (let names of arrayNames){
        let item = form[names].value;
        localStorage.setItem(names, item);
    }
}

function loadingData(event) {
    event.preventDefault();
    for (let names of arrayNames){
        form[names].value = localStorage.getItem(names);
    }
}

function sendingData(event) {
     event.preventDefault();
     let newUser = Array();
     for (let names of arrayNames) {
         newUser.push(localStorage.getItem(names));
         localStorage.removeItem(names);
     }
     users.push(newUser);
     localStorage.setItem('savedUserInfo', JSON.stringify(users));
     console.log(localStorage.getItem('savedUserInfo'));
     form.reset();
}

function dry() {
    for(let names of arrayNames){
        let item = localStorage.getItem(names);
        if (item !== null){
            form[names].value = item;
        }
    }
}

button.addEventListener("click", sendingData);
form.addEventListener("input", savingData);
window.addEventListener("load", loadingData);
setInterval(dry, 100);
