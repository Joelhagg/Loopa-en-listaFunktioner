let app = document.querySelector('#app');

let langs = ['Gå','Promenera','Jogga', 'lunka', 'Springa'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});


app.append(...nodes);








//let funs = ["Gå", "Springa", "Löpa", "Kuta", "Krypa"];

//for (let i=0; i<funs.length; i++) {
    //funs += "det är kul att " + i + "<br>";
    
    //console.log(funs[i] + " är rolig"); 
//} 

//document.getElementById("item1").innerHTML = funs;

//let text = ["Gå", "springa", "Löpa"]

//for (i = 0; i <text; i++) {
  //text += "Jag gillar att" + i + "<br>";
//}

//document.getElementById("demo").innerHTML = text;



// var select = document.getElementById('ul');
// var array = ["Gå", "Springa", "Löpa", "Kuta", "Krypa"];

// for (var i = 0; i < array.length; i++) {
//   var li = document.createElement("li");
//   var link = document.createElement("a");
//   li.appendChild(link);
//   var text = document.createTextNode(array[i]);
//   link.appendChild(text);
//   select.insertBefore(li, select.childNodes[i]);
// }

// var select = document.getElementById('funList');
// var list = ["Gå", "Springa", "Löpa", "Kuta", "Krypa"]

// for (var i = 0; i < list.length; i++){
//     var li = document.createElement("li");
//     var text = document.createTextNode(list[i])
//     select.insertBefore(li, select[i]);
// }