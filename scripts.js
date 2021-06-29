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
 let otherbook = new Book('bora bora ', 'Britins', 5800);
 console.log(book,otherbook)


 class ITbook extends Book{  //passa a herança
constructor( title, author, pages, technology){
    super(title,author, pages);
    this.technology = technology;

}

 }

 let itBook = new ITbook('bora bora ', 'Britins', 800, 'algoritimos');
 console.log(itBook)