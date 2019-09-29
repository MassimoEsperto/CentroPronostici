export class User{

    username:string;
    password:string;
    email:string;
    ruolo:number;
    
    constructor(username:string,password:string,email:string,ruolo:number)
    {
        this.username=username;
        this.password=password;
        this.email=email;
        this.ruolo=ruolo;
    }
}
