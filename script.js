const popupoverlay = document.querySelector(".overlay");
const showPopup = document.getElementById("addIcon");
const popupConatianer = document.querySelector(".popup-container");
const closePopupBox = document.getElementById("close-popup");

const collContainer = document.querySelector(".collection-container");
const addBook = document.getElementById("addbook");
const tittle = document.getElementById("tittle");
const authorName = document.getElementById("author");
const descriptionInput = document.getElementById("description");

// Open popup
showPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popupConatianer.style.display = "block";
  popupoverlay.style.display = "block";
});

// Close popup
closePopupBox.addEventListener("click", (e) => {
  e.preventDefault();
  popupConatianer.style.display = "none";
  popupoverlay.style.display = "none";
});

// Load books from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach((book) => renderBook(book));
});

// Add book logic
addBook.addEventListener("click", (e) => {
  e.preventDefault();

  const book = {
    title: tittle.value,
    author: authorName.value,
    description: descriptionInput.value,
  };

  renderBook(book);
  saveBookToLocalStorage(book);

  // Clear inputs
  tittle.value = "";
  authorName.value = "";
  descriptionInput.value = "";

  // Hide popup
  popupConatianer.style.display = "none";
  popupoverlay.style.display = "none";
});

// Render book to DOM
function renderBook(book) {
  const div = document.createElement("div");
  div.classList.add("book-container");

  div.innerHTML = `
    <h2>${book.title}</h2>
    <h4>${book.author}</h4>
    <p>${book.description}</p>
    <button class="Delete">Delete</button>
  `;

  // Delete book
  div.querySelector(".Delete").addEventListener("click", () => {
    div.remove();
    deleteBookFromLocalStorage(book);
  });

  collContainer.appendChild(div);
}

// Save book to localStorage
function saveBookToLocalStorage(book) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

// Delete book from localStorage
function deleteBookFromLocalStorage(bookToDelete) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const updatedBooks = books.filter((book) =>
    !(book.title === bookToDelete.title &&
      book.author === bookToDelete.author &&
      book.description === bookToDelete.description)
  );
  localStorage.setItem("books", JSON.stringify(updatedBooks));
}
