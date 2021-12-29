let body = document.body;

const funThings = [
  "Spela dator",
  "Klappa katten",
  "Träna",
  "Kolla Youtube",
  "Laga mat",
];
console.log(funThings);

funThings.forEach((thing) => {
  let mainUl = document.createElement("ul");
  mainUl.innerHTML = `En sak som jag tycker är kul: ${thing}`;
  body.append(mainUl);
});
