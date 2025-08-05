// const pepe = document.querySelector("a");
// console.log(pepe.href);

// const pepe2 = document.querySelector("input");
// console.log(pepe2.value);

// const pepe3 = document.querySelector("input");
// console.log(pepe3.placeholder);

// const ull = document.querySelector("ul");
// console.log(ull.children);

// const isreal = document.querySelector("h1");
// console.log(isreal)
// isreal.style.color = "green";
// isreal.style.backgroundColor = "black";


// function myFunction() {
//   const node = document.createElement("li");
//   const textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }




// // }

// Assignment
// function myFunction() {

//   const li = document.createElement("li");
//   const li2 = document.createElement("li");
//   const li3 = document.createElement("li");

//   li.append("Water");
//   li2.append("Juice");
//   li3.append("Wine");

//   // Append several "li" to the list:
//   document.getElementById("myList").append(li);
//   document.getElementById("myList").append(li2);
//   document.getElementById("myList").append(li3);
// }

// const secondBtn = document.querySelector('.second-btn');
// secondBtn.onclick = function () {
//   alert('You have just clicked me');
// }

// const best = document.querySelector(".best");

// best.addEventListener('click', function () {
//   alert("You just clicked the best way");
// });

// const para1 = document.querySelector(".para");
// para1.addEventListener('click', (event) => {
//   console.log(event);
// });

// const input = document.querySelector("input");

// Assignment on eventListner and event object



// const secondBtn = document.querySelector('.second-btn');
// secondBtn.onclick = function () {
//   alert('You have just clicked me');
// };

// const thirdBtn = document.querySelector('.best');
// thirdBtn.addEventListener('click', (event) => {
//   alert('You have done it the right way');
// });

// const firstPara = document.querySelector('.para');
// firstPara.addEventListener('click', (event) => {
//   console.log(event);
// });

// const input1 = document.querySelector('input');
// input1.addEventListener('click', (event) => {
//   console.log(event);
// });

// const firstForm = document.querySelector('form');
// firstForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(input.value);
// });

// // To get the value
// const input = firstForm.querySelector('input')



// API
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  }).catch(error => console.error(error));

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  }).catch(error => console.error(error));

fetch("https://dummyjson.com/auth/RESOURCE',{
    method: 'GET, /* or POST/PUT/PATCH/DELETE */"
    headers: {
  'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN*/',
  'Content-Type': 'application/json'

},
  })
  .then(res => res.json())
  .then(console.log);