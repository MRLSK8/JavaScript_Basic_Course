class Usuario{
    constructor(Email, Senha){
        this.email = Email;
        this.senha = Senha
    }
    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(Email, Senha) {
        super(Email, Senha);

        this.admin = true;
    }
    
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');


console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true