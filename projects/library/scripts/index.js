const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book");
const closeBtn = document.querySelector(".close");
const bookForm = document.querySelector(".book-form");

let myLibrary = [];

myLibrary = [
    {
        id: crypto.randomUUID(),
        dateAdded: new Date(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        dateAdded: new Date(),
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: false,
    },
    {
        id: crypto.randomUUID(),
        dateAdded: new Date(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        read: true,
    },
    {
        id: crypto.randomUUID(),
        dateAdded: new Date(),
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: false,
    }
];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.dateAdded = new Date();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

function removeBookFromLibrary(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        return true;
    }
    return false;
}

function toggleReadStatus(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.read = !book.read;
        return book;
    }
    return null;
}

function displayBooks() {
    const bookList = document.querySelector(".book-list")
    bookList.innerHTML = ""; // Clear existing books
    myLibrary.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Date Added: ${book.dateAdded.toLocaleDateString()}</p>
            <p>Status: ${book.read ? "Read" : "Not Read"}</p>
            <button class="toggle-read" data-id="${book.id}">${book.read ? "Mark as Unread" : "Mark as Read"}</button>
            <button class="remove-book" data-id="${book.id}">Remove</button>
        `;
        bookList.appendChild(bookItem);
    });
}

displayBooks();

addBookBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

function showModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function hideModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";    
    bookForm.reset();
}

bookForm.addEventListener('submit', handleAddBook);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('toggle-read')) {
        handleToggleRead(e.target.dataset.id);
    }
    if (e.target.classList.contains('remove-book')) {
        handleRemoveBook(e.target.dataset.id);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        hideModal();
    }
});

function handleAddBook(e) {
    e.preventDefault();

    const formData = new FormData(bookForm);
    const title = formData.get("title").trimEnd();
    const author = formData.get("author").trim();
    const pages = parseInt(formData.get('pages'));
    const read = formData.has('read');

    if (!title || !author || isNaN(pages) || pages <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    hideModal();
    console.log("Book added:", title, author, pages, read);
}

function handleToggleRead(id) {
    const book = toggleReadStatus(id);
    if (book) {
        displayBooks();
        console.log(`Book status toggled: ${book.title} is now ${book.read ? "Read" : "Not Read"}`);
    }
}

function handleRemoveBook(id) {
    const bookToRemove = myLibrary.find(book => book.id === id);
    if (bookToRemove && confirm(`Are you sure you want to remove "${bookToRemove.title}"?`)) {
        const removed = removeBookFromLibrary(id);
        if (removed) {
            displayBooks();
            console.log(`Book removed: ${bookToRemove.title}`);
        }
    }
}