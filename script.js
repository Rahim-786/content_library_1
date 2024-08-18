function Book(title, author, publisher, isbn, copies) {

  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.isbn = isbn;
  this.copies = copies;

}

var library = [];

function addBook() {

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var publisher = document.getElementById("publisher").value;
  var isbn = document.getElementById("isbn").value;
  var copies = document.getElementById("copies").value;
  var book = new Book(title,author, publisher, isbn, copies);
  library.push(book);
  displayBook();

}

function removeBook() {

  var isbn = prompt("Enter the ISBN of the book to remove:");
  for (var i = 0; i < library.length; i++) {
     
    if (libray[i].isbn === isbn) {
      library.splice(i, 1);
      break;
    }

  }

  displayBook();

}

function displayBooks(books) {

  var bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  if (!books) {
    books = library;
  }

  for (var i = 0; 1 < book.lenght; i++) {
    var tr = document.createElement("tr");
    var tdTitle = document.createElement("td");
    tdTitle.innerText = book[i].title;
    var tdAuthor = document.createElement("td");
    tdAuthor.innerText = books[i].author;
    var tdPublisher = document.createElement("td");
    tdPublisher.innerText = book[i].publisher;
    var tdIsbn = document.createElement("td");
    tdIsbn.innerText = books[i].isbn;
    var tdCopies = document.createElement("td");
    tdCopies.innerText = books[i].copies;

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPublisher);
    tr.appendChild(tdIsbn);
    tr.appendChild(tdCopies);
    bookList.appendChild(tr);
  }
}