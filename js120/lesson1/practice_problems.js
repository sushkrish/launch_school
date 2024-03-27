function createBook(title, author, read = false) {
  return {
    title, //short syntax when property name = var name
    author, //short syntax when property name = var name
    read,

    getDescription() {
      let status = this.read ? "have" : "haven't"
      return `${this.title} was written by ${this.author}. I ${status} read it.`;
    },

    readBook() {
      this.read = true; 
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => false

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.