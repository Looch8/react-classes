// Media class as common starting point for
// things like DVDs, books, vinyls

class Media {
	constructor() {
		this.name = "Default generic media";

		Media.count++;
	}

	// Count of all media that exists
	static count = 0;

	getMediaName() {
		return this.name;
	}

	static version() {
		return " class version 1.0.0";
	}

	version() {
		return "prototype version 1.0.0";
	}
}

// Instance of the blueprint
let someMedia = new Media();
someMedia.name = "Cool generic media";
console.log(someMedia.name);
console.log(someMedia.version());

console.log(Media.version());
console.log(Media.prototype.version());

let someOtherMedia = new Media();
console.log(someOtherMedia.name);

console.log(`We have ${Media.count} media objects`);
