document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById('newdiv')
let books = document.getElementById("books")
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const submitBtn = document.getElementById("submitBtn");
const formElement = document.querySelector("form")















let myLibrary = [
   
];



function Book(title, author, pages) {

this.title = title;
this.author = author;
this.pages = pages;


}


function addBookToLibrary () {


let title = inputTitle.value;
let author = inputAuthor.value;
let pages =  inputPages.value;


let newBook = new Book(title, author, pages)


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
    
   
    newBookDiv.appendChild(titlePara);
    newBookDiv.appendChild(authorPara);
    newBookDiv.appendChild(pagesPara);

    
    
    books.appendChild(newBookDiv)
    container.appendChild(books)
    

})


}


submitBtn.addEventListener("click", addBookToLibrary )

formElement.addEventListener('submit', function(event) {

    event.preventDefault(); 
});





}); 
