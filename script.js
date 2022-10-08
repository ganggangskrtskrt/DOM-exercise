let myLibrary = [];
let button = document.querySelector('button');
let input = document.querySelectorAll('input');
let title = document.getElementById('title');
let author = document.getElementById('author');
let year = document.getElementById('year');
let ul = document.querySelector("ul");

class Book{
 constructor(title, author, year){
  this.title=title;
  this.author = author;
  this.year = year;
 }
 addBook(){
 let li = document.createElement("li");
 let p1 = document.createElement("p");
 let p2 = document.createElement("p");
 let p3 = document.createElement("p");
 p1.appendChild(document.createTextNode(`Title: ${title.value}`));
 p2.appendChild(document.createTextNode(`Author: ${author.value}`));
 p3.appendChild(document.createTextNode(`Year: ${year.value}`));
 li.appendChild(p1);
 li.appendChild(p2);
 li.appendChild(p3);
 ul.appendChild(li);
//toggle button
 let newButton = document.createElement("button");
 newButton.appendChild(document.createTextNode("Mark as read"));
 li.append(newButton);
newButton.addEventListener("click", function(){
 if(newButton.textContent==="Mark as read")
 {
 li.classList.toggle("done");
 newButton.classList.toggle("doneForButton");
 deleteButton.classList.toggle("doneForButton");
 newButton.textContent = "✔"
 }
 else {newButton.textContent="Mark as read";
 li.classList.toggle("done");
 newButton.classList.toggle("doneForButton");
 deleteButton.classList.toggle("doneForButton");
}
})
//delete button
let deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("delete"));
 li.append(deleteButton);
 deleteButton.addEventListener("click", function(){
  ul.removeChild(li);
 })
 title.value = "";
 author.value = "";
 year.value = "";
 }
}

// function Book(title, author, year){
// this.title = title,
// this.author= author, 
// this.year = year
// }

// function addBook(){
//  newBook = new Book(title.value, author.value, year.value);
//  myLibrary.push(newBook);
//  let li = document.createElement("li");
//  let p1 = document.createElement("p");
//  let p2 = document.createElement("p");
//  let p3 = document.createElement("p");
//  p1.appendChild(document.createTextNode(`Title: ${title.value}`));
//  p2.appendChild(document.createTextNode(`Author: ${author.value}`));
//  p3.appendChild(document.createTextNode(`Year: ${year.value}`));
//  li.appendChild(p1);
//  li.appendChild(p2);
//  li.appendChild(p3);
//  ul.appendChild(li);
// //toggle button
//  let newButton = document.createElement("button");
//  newButton.appendChild(document.createTextNode("Mark as read"));
//  li.append(newButton);
// newButton.addEventListener("click", function(){
//  if(newButton.textContent==="Mark as read")
//  {
//  li.classList.toggle("done");
//  newButton.classList.toggle("doneForButton");
//  deleteButton.classList.toggle("doneForButton");
//  newButton.textContent = "✔"
//  }
//  else {newButton.textContent="Mark as read";
//  li.classList.toggle("done");
//  newButton.classList.toggle("doneForButton");
//  deleteButton.classList.toggle("doneForButton");
// }
// })
// //delete button
// let deleteButton = document.createElement("button");
// deleteButton.appendChild(document.createTextNode("delete"));
//  li.append(deleteButton);
//  deleteButton.addEventListener("click", function(){
//   ul.removeChild(li);
//   ul.removeChild(deleteButton);
//   ul.removeChild(newButton);
//  })
//  title.value = "";
//  author.value = "";
//  year.value = "";
// }

button.addEventListener("click", function(){
 if (title.value.length > 0 && author.value.length > 0 && year.value.length > 0)
 {
let newBook = new Book(title.value, author.value, year.value);
myLibrary.push(newBook);
 newBook.addBook();
 }
})
