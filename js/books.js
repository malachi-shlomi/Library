const books = [
    {
        bookid: 1001,
        name: "Harry Potter and the Sorcerer's Stone",
        writer: "J.K. Rowling",
        genre: "Fantasy",
        image: "./Books/harry-potter.jpeg",
    },
    {
        bookid: 1002,
        name: "To Kill a Mockingbird",
        writer: "Harper Lee",
        genre: "Classics",
        image: "./Books/mockingbird.jpg",
    },
    {
        bookid: 1003,
        name: "The Great Gatsby",
        writer: "F. Scott Fitzgerald",
        genre: "Classics",
        image: "./Books/gatsby.jpeg",
    },
    {
        bookid: 1004,
        name: "The Catcher in the Rye",
        writer: "J.D. Salinger",
        genre: "Classics",
        image: "./Books/catcher.jpeg",
    },
    {
        bookid: 1005,
        name: "The Hobbit",
        writer: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "./Books/the-hobbit.jpeg",
    },
    {
        bookid: 1006,
        name: "Pride and Prejudice",
        writer: "Jane Austen",
        genre: "Classics",
        image: "./Books/pride-prejudice.jpeg",
    },
    {
        bookid: 1007,
        name: "1984",
        writer: "George Orwell",
        genre: "Dystopian",
        image: "./Books/1984.jpeg",
    },
    {
        bookid: 1008,
        name: "The Lord of the Rings",
        writer: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "./Books/lord-of-the-rings.jpeg",
    },
    {
        bookid: 1009,
        name: "Frankenstein",
        writer: "Mary Shelley",
        genre: "Gothic Horror",
        image: "./Books/frankenstein.jpeg",
    },
    {
        bookid: 1010,
        name: "The Hunger Games",
        writer: "Suzanne Collins",
        genre: "Dystopian",
        image: "./Books/hunger-games.jpeg",
    }
];

const bookContainer = document.getElementById("BooksSection");
const categorySelector = document.getElementById("category-selector");

function ShowBooks() {

    const selectedCategory = categorySelector.value;
    
    bookContainer.innerHTML = "";
    
    const filteredBooks = (selectedCategory === "all")
        ? books
        : books.filter(book => book.genre === selectedCategory);
    
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const Books = filteredBooks.filter(book => {
        return book.name.toLowerCase().includes(searchInput);
    });

    Books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.className = "book";
        
        const bookPageURL = `book.html?bookid=${book.bookid}`;
        
        bookElement.innerHTML = `
            <a style="text-decoration: none" href="${bookPageURL}">
                <img src="${book.image}" alt="">
                <h2>${book.name}</h2>
                <p>Writer: ${book.writer}</p>
                <p>Genre: ${book.genre}</p>
            </a>
        `;
        bookContainer.appendChild(bookElement);
    });
}



categorySelector.addEventListener("change", ShowBooks);
ShowBooks();



// function SearchBook() {
//     const searchInput = document.getElementById("searchInput").value.toLowerCase();

//     const filteredBooks = books.filter(book => {
//         return book.name.toLowerCase().includes(searchInput);
//     });
//     filterBooks(filteredBooks)
//     console.log('filter');
// }