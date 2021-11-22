let app = document.querySelector('#app');

let langs = ['Gå','Promenera','Jogga', 'lunka', 'Springa'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});


app.append(...nodes);

