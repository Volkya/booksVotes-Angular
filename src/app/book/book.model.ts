// Properties

export class Book { // export class to app component
    title: String;
    description: String;
    votes: number;

// Construct 

    constructor(title: string, description: string, votes?: number){
        this.title=title;
        this.description=description;
        this.votes=votes || 0;
    }

    // method up and down vote

    voteUp(){
        this.votes++;
    }

    voteDown(){
        this.votes--;
    }

}