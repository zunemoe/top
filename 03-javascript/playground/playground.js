function Book(title, author, numberOfPages, isRead) {
    if (!new.target) {
        throw new Error("Book constructor must be called with 'new'");
    }
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
    }
    console.log(this.prototype);
}