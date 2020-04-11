class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this._admin = false;
    }

    isAdmin() {
        return this._admin;
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this._admin = true;
    }
}


// Expected results
const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
