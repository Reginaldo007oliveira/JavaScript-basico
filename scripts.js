class Book {
    constructor (title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    read(){
return `Estou lendo ${this.title}`
    }
}
 let book = new Book('Algoritmos para viver', 'Brian', 500);
 console.log(book.read())