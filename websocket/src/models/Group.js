class Group {
    constructor(id, name, author) {
        this.name = name;
        this.id = id;
        this.author = author;
        this.groupUsers = [];
        this.messages = [];
    }
}

module.exports = Group;
