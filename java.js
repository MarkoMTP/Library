document.addEventListener("DOMContentLoaded", function() {

let books = document.getElementById("books")
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const submitBtn = document.querySelector(".submitBtn");
const formElement = document.querySelector("form")

const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button')
const myModal  = document.querySelector('.modal')



let selectElement = document.getElementById("selectEl");


openBtn.addEventListener('click', () => {
myModal.showModal()


})

closeBtn.addEventListener('click', () => {
myModal.close()

})



   






let myLibrary = [
   
];



function Book(title, author, pages, optionText) {

this.title = title;
this.author = author;
this.pages = pages;
this.optionText = optionText;

}


function addBookToLibrary () {


let title = inputTitle.value;
let author = inputAuthor.value;
let pages =  inputPages.value;



let optionElement = selectElement.options[selectElement.selectedIndex];

let optionText = optionElement.text;


let newBook = new Book(title, author, pages, optionText)


myLibrary.push(newBook);


books.innerHTML = '';
 


myLibrary.forEach(book => {

    const newBookDiv = document.createElement('div');
    newBookDiv.classList.add("bookCard")

    let titlePara = document.createElement("p");
    titlePara.textContent = 'Title:' + ' '+ book.title;

    let authorPara =  document.createElement("p");
    authorPara.textContent = 'Author:' + ' '+ book.author;

     let pagesPara =  document.createElement("p");
     pagesPara.textContent = 'Pages:' + ' '+ book.pages;
    
     let optionTextPara = document.createElement('p')
     optionTextPara.textContent = 'Read:' + ' ' + book.optionText; 
    switch(book.optionText) {
        case 'Yes':
            newBookDiv.style.backgroundColor = "lightgreen";
            break;
            case 'No':
            newBookDiv.style.backgroundColor = "grey" 
        break;

    }

   
    
   
const button = document.createElement('button');
button.classList.add("remove")
    button.textContent = 'Remove'
   button.addEventListener('click', function() {

let parentDiv = this.closest('.bookCard')

if(parentDiv) {
let bookIndex = Array.from(parentDiv.parentNode.children).indexOf(parentDiv)

if(bookIndex !== -1){


myLibrary.splice(bookIndex, 1)

}

parentDiv.remove()



}})
   
    newBookDiv.appendChild(titlePara);
    newBookDiv.appendChild(authorPara);
    newBookDiv.appendChild(pagesPara);
    newBookDiv.appendChild(optionTextPara);
    newBookDiv.appendChild(button)
    

    
    
    books.appendChild(newBookDiv)
    container.appendChild(books)
    

})

myModal.close()

}


submitBtn.addEventListener("click", addBookToLibrary )

formElement.addEventListener('submit', function(event) {

    event.preventDefault(); 
});





}); 
