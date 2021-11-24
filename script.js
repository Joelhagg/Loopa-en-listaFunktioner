// let app = document.querySelector('#app');

// let langs = ['Gå','Promenera','Jogga', 'lunka', 'Springa'];

// let nodes = langs.map(lang => {
//     let li = document.createElement('li');
//     li.textContent = lang;
//     return li;
// });


// app.append(...nodes);

// let funs = ["Gå", "Promenera", "Jogga", "Springa", "Kuta"]

// for(let i = 0; i < 5; i++) {

// }








// Det rätta sättet som fungerar



let names = ["Gå", "Promenera", "Jogga", "springa", "Kuta"]


function renderNames() {

    for(let i = 0; i < names.length; i++) {
       let value = names[i];
       let headerElement = document.createElement("li");
       headerElement.innerText = "Jag gillar att - " + value
       document.getElementById("ul").append(headerElement);
    } 
}

renderNames() 











// Ny



// let users = [
//     {
//         name: "Victor",
//         age: 30,
//         likesJavascrift: true
//     }, {
//         name: "Pelle",
//         age: 33,
//         likesJavascrift: false
//     }, {
//         name: "Kalle",
//         age: 100,
//         likesJavascrift: true
//     }
// ]

// function renderNames() {

//     for(let i = 0; i < users.length; i++) {
//        let user = users[i];
//        let headerElement = document.createElement("h1");

//        let describeString = ""

//        if(user.likesJavascrift) {
//            describeString = `${user.name} är ${user.age} år gammal och gillar javascript`
//        } else {
//            describeString = `${user.name} är ${user.age} år gammal och gillar inte javascript`
//        }

//        headerElement.innerText = describeString
       
//        document.body.append(headerElement);
//     } 
// }

// renderNames() 

// let htmlCode = `<div><h1>${users[1]}</h1></div>`