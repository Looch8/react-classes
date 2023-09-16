// Import book and library
// module.exports = {book}
const { Book } = require("./Book");
// module.exports = library
const Library = require("./Library");

// make a library
let newLibrary = new Library();

// make some books
let coolProgrammingBook = new Book("Cool JS things 2023 edition");
let coolPokemonBook = new Book("How to catch them all 2023 edition");

// add books to library
newLibrary.books.push(coolProgrammingBook, coolPokemonBook);

console.log(newLibrary.books);
let { Media } = require("./Media");
console.log(Media.count);
