const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get("bookid") || "";

const books = [
    {
        bookid: 1001,
        name: "Harry Potter and the Sorcerer's Stone",
        writer: "J.K. Rowling",
        genre: "Fantasy",
        image: "./Books/harry-potter.jpeg",
        description: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.`
    },
    {
        bookid: 1002,
        name: "To Kill a Mockingbird",
        writer: "Harper Lee",
        genre: "Classics",
        image: "./Books/mockingbird.jpg",
        description: `To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play opened in London's West End at the Gielgud Theatre in March 2022. The show follows the story of Atticus Finch, a lawyer in 1930s Alabama, as he defends Tom Robinson, a black man falsely accused of rape. Varying from the book, the play has Atticus as the protagonist, not his daughter Scout, allowing his character to change throughout the show.`
    },
    {
        bookid: 1003,
        name: "The Great Gatsby",
        writer: "F. Scott Fitzgerald",
        genre: "Classics",
        image: "./Books/gatsby.jpeg",
        description: `The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner’s Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth. Unsuccessful upon publication, the book is now considered a classic of American fiction and has often been called the Great American Novel.`
    },
    {
        bookid: 1004,
        name: "The Catcher in the Rye",
        writer: "J.D. Salinger",
        genre: "Classics",
        image: "./Books/catcher.jpeg",
        description: `The Catcher in the Rye is an American novel by J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society. The novel also deals with complex issues of innocence, identity, belonging, loss, connection, sex, and depression. The main character, Holden Caulfield, has become an icon for teenage rebellion. Caulfield, nearly of age, gives his opinion on a wide variety of topics as he narrates his recent life events.`
    },
    {
        bookid: 1005,
        name: "The Hobbit",
        writer: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "./Books/the-hobbit.jpeg",
        description: `The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children's literature, and is one of the best-selling books of all time with over 100 million copies sold. The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and thirteen dwarves that make up Thorin Oakenshield's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug. Bilbo's journey takes him from his peaceful rural surroundings into more sinister territory.`
    },
    {
        bookid: 1006,
        name: "Pride and Prejudice",
        writer: "Jane Austen",
        genre: "Classics",
        image: "./Books/pride-prejudice.jpeg",
        description: `Pride and Prejudice is a romantic novel by Jane Austen, first published in 1813. The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, and marriage in the society of the landed gentry of early 19th-century England. Elizabeth is the second of five daughters of a country gentleman living near the fictional town of Meryton in Hertfordshire, near London.`
    },
    {
        bookid: 1007,
        name: "1984",
        writer: "George Orwell",
        genre: "Dystopian",
        image: "./Books/1984.jpeg",
        description: `1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation. The superstate is under the Party's rule led by Big Brother, who employs the Thought Police to persecute individuality and independent thinking.`
    },
    {
        bookid: 1008,
        name: "The Lord of the Rings",
        writer: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "./Books/lord-of-the-rings.jpeg",
        description: `The Lord of the Rings is an epic high-fantasy novel by English author and scholar J.R.R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit but eventually developed into a much larger work. It was written in stages between 1937 and 1949, with much of it being created during World War II. It is the third best-selling novel ever written, with over 150 million copies sold.`
    },
    {
        bookid: 1009,
        name: "Frankenstein",
        writer: "Mary Shelley",
        genre: "Gothic Horror",
        image: "./Books/frankenstein.jpeg",
        description: `Frankenstein; or, The Modern Prometheus is a novel written by English author Mary Shelley that tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on January 1, 1818.`
    },
    {
        bookid: 1010,
        name: "The Hunger Games",
        writer: "Suzanne Collins",
        genre: "Dystopian",
        image: "./Books/hunger-games.jpeg",
        description: `The Hunger Games is a dystopian novel by American author Suzanne Collins. It is the first novel in The Hunger Games trilogy and was followed by two sequels: Catching Fire (2009) and Mockingjay (2010). The novel follows 16-year-old Katniss Everdeen, a girl from District 12 who volunteers for the 74th Hunger Games in place of her younger sister Primrose Everdeen.`
    }
];




const bookDetails = books.find(item => item.bookid == bookId);

if (bookDetails) {
    const bookPageElement = document.querySelector('.BookPageWraper');
    bookPageElement.innerHTML = `
        <img src="${bookDetails.image}" alt="${bookDetails.name}">
        <div>
            <h2>${bookDetails.name}</h2>
            <p> ${bookDetails.writer}<br><span>${bookDetails.genre}</span></p>
            <br>
            <p class="Description" >${bookDetails.description}<p>
        </div>
    `;
} else {
    const bookPageElement = document.querySelector('.BookPageWraper');
    bookPageElement.innerHTML = `
        <div>
            <h2>Book Not Found!</h2>
        </div>
    `;
}
