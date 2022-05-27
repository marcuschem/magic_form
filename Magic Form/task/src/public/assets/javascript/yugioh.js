let users = JSON.parse(localStorage.getItem("savedUserInfo")) || [];
let buttonsArray = document.getElementsByClassName("delete-button") || [];
let cardsArray = document.getElementsByClassName("submit-history-card") || [];

window.addEventListener("load", function(event){
    for (let element of users) {
        let card = document.createElement("div");
        card.setAttribute("class", "submit-history-card card");
        card.innerHTML = `<div class="card-body">
                    <h5 class="card-title">First name</h5>
                    <p class="card-text card-first-name">${element[0]}</p>
                    <h5 class="card-title">Last name</h5>
                    <p class="card-text card-last-name">${element[1]}</p>
                    <h5 class="card-title">Email</h5>
                    <p class="card-text card-email">${element[2]}</p>
                    <h5 class="card-title">Phone </h5>
                    <p class="card-text card-phone">${element[3]}</p>
                    <h5 class="card-title">Company</h5>
                    <p class="card-text card-company">${element[4]}</p>
                    <h5 class="card-title">Address</h5>
                    <p class="card-text card-address">${element[5]}</p>
                    <button class="delete-button btn btn-danger">Delete</button> 
                  </div>`
        document.getElementById("info").appendChild(card);

    }

});

window.addEventListener("load", function(event) {
    for (let index=0; index < buttonsArray.length; index++  ) {
        console.log(buttonsArray);
        buttonsArray[index].addEventListener("click", function (event) {
        users.splice(index, 1);
        document.getElementById("info").removeChild(cardsArray[index]);
        localStorage.setItem("savedUserInfo", JSON.stringify(users));
        });
    }
})









