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



class Book {

    constructor(title, author, pages, optionText) {

this.title = title;
this.author = author;
this.pages = pages;
this.optionText = optionText;

}
}

class addBookToLibrary  {
constructor() {
this.title = inputTitle.value;
this.author = inputAuthor.value;
this.pages =  inputPages.value;


this.optionElement = selectElement.options[selectElement.selectedIndex];
this.optionText = this.optionElement.textContent

 this.newBook = new Book(this.title, this.author, this.pages, this.optionText)


}



addBook() {
  myLibrary.push(this.newBook);
}


clear() {
    books.innerHTML = '';
}

create() {
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
}
formElement.addEventListener('submit', function (event) {
    // Clear any existing custom validity
    inputTitle.setCustomValidity('');
    inputAuthor.setCustomValidity('');
    inputPages.setCustomValidity('');

    // Set custom validity and display custom error message if needed
    if (inputTitle.validity.valueMissing) {
        inputTitle.setCustomValidity("Title is required");
    }

    if (inputAuthor.validity.valueMissing) {
        inputAuthor.setCustomValidity("Author is required");
    }

    if (inputPages.validity.valueMissing) {
        inputPages.setCustomValidity("Pages is required");
    }

    // Check if any of the fields have custom validity set
    if (!formElement.checkValidity()) {
        // If there's any custom validity, prevent the form submission
        formElement.reportValidity();
        event.preventDefault();
    }
});

submitBtn.addEventListener("click", () => {
    const addBookInstance = new addBookToLibrary();

    if (inputTitle.validity.valueMissing === false && inputAuthor.validity.valueMissing === false && inputPages.validity.valueMissing === false) {
        addBookInstance.addBook();
        addBookInstance.clear();
        addBookInstance.create();
    }
});
});


// form validity

