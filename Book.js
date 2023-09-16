const { Media } = require("./Media");

class Book extends Media {
	constructor(newName) {
		super(newName); // Call the parent constructor

		// Not needed because ALL media typs will have a name

		// this.name = newName;
	}
}

let someBook = new Book("Coolest programming book ever");
console.log(someBook.name);

module.exports = {
	Book,
};
