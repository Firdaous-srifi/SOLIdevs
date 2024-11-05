let searchedBooks = [];
let books = [];
let title = document.getElementById('title');
let author = document.getElementById('author');
let pubdate = document.getElementById('pdate');
let price = document.getElementById('price');
let table = document.getElementById('infoTable');
let tbody = document.getElementsByTagName('tbody')[0];
let bookIndex = -1;  //**no selection -1 */

class Book {
    constructor(Title,Author,Publication_date, Price){
        this.Title = Title;
        this.Author = Author;
        this.Publication_date = Publication_date;
        this.Price = Price;
    }
    Details(){
        return`
                <td>${this.Title}</td>
                <td>${this.Author}</td>
                <td>${this.Publication_date}</td>
                <td>${this.Price}</td>
                <td>
                <input class="TRbtn modify-btn" type="button" id="modify" value="Modify">
                <input class="TRbtn remove-btn" type="button" id="remove" value="Remove">
                </td>`;
    }
}


function addBook(){
    let titleValue = title.value;
    let authorValue = author.value;
    let pubDateValue = pubdate.value;
    let priceValue = price.value;

    if(titleValue && authorValue && pubDateValue && priceValue) {
        if (bookIndex >= 0 ){

            books[bookIndex] = new Book(titleValue, authorValue,pubDateValue, priceValue);
            updateTable(books);
            bookIndex = -1;
            resetAddButton();
        }else {
            let newBook = new Book(titleValue, authorValue, pubDateValue, priceValue);
            books.push(newBook);
            ShowLibrary(newBook);
            resetAddButton();
        }
        clearForm();
    }else{
        alert("Make sure all fields are filled pleae!!!!!!!");
    }
}

function resetAddButton() {
    const addButton = document.getElementById("AddBook-btn");
    addButton.innerHTML = "Add Book";
}

function ShowLibrary(newBook) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = newBook.Details();

    newRow.querySelector('.remove-btn').addEventListener('click',function(){
        removeBook(newRow, newBook);
    });

    newRow.querySelector('.modify-btn').addEventListener('click',function(){
        modifyBook(newRow, newBook);
    });

    tbody.appendChild(newRow);
}

function modifyBook(book) {
    title.value = book.Title;
    author.value = book.Author;
    pubdate.value = book.Publication_date;
    price.value = book.Price;

    bookIndex = books.indexOf(book);

    const addButton = document.getElementById("AddBook-btn");
    addButton.innerHTML = "Edit Book";
}

function removeBook(row, book){
    const index = books.indexOf(book);
    if (index > -1) {
        books.splice(index, 1);
    }
    tbody.removeChild(row);
}

function updateTable(arrays=[]) {
    tbody.innerHTML = "";
    arrays.forEach(book => ShowLibrary(book));
}

function clearForm() {
    title.value = "";
    author.value = "";
    pubdate.value = "";
    price.value = "";
}

function YearSearch() {
    let SearchYearInput = document.getElementById('searchYear');
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click',function (){
        let searchYear = SearchYearInput.value;

        searchedBooks = [];

        books.forEach(book => {
            Pubyear=book.Publication_date;
            if(Pubyear >= searchYear){
                searchedBooks.push(book);
            }
        });
        tbody.innerHTML="";
        updateTable(searchedBooks);
    })
}
YearSearch();