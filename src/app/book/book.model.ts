// Properties

export class Book { // export class to app component
    title: string;
    author: string;
    editorial: string;
    description: string;
    votes: number;

// Construct

    constructor(title: string, author: string, editorial: string, description: string, votes?: number) {
        this.title = title;
        this.author = author;
        this.editorial = editorial;
        this.description = description;
        this.votes = votes || 0;
    }

    // method up and down vote

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }

}
