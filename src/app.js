/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extn = [".com", ".net", ".online", ".es"];

let parrafo = document.querySelector("#domain");
let olElement = document.createElement("ol");

let domain;
let domains = [];

const domainGenerator = (a, b, c, d) => {
  for (let i = 0; i < a.length; i++) {
    for (let x = 0; x < b.length; x++) {
      for (let j = 0; j < c.length; j++) {
        for (let l = 0; l < d.length; l++) {
          domain = a[i] + b[x] + c[j] + d[l];
          console.log("AAAA", domain);
          domains.push(domain);
        }
      }
    }
  }
  return domains;
};
console.log(domainGenerator(pronoun, adj, noun, extn));
console.log(domains);

/* for (let i = 0; i < domains.length; i++) {
  let newLi = domains[i];
  let liElement = document.createElement("li");
  liElement.style.listStylePosition = "inside";
  liElement.innerHTML = newLi;
  console.log(liElement);
  olElement.appendChild(liElement);
  console.log(olElement);
}

parrafo.appendChild(olElement);*/

domains.map(e => {
  let newLi = e;
  let liElement = document.createElement("li");
  liElement.style.listStylePosition = "inside";
  liElement.innerHTML = newLi;
  console.log(liElement);
  olElement.appendChild(liElement);
  console.log(olElement);
});

parrafo.appendChild(olElement);
