export class Login {
    id:any;
    username:string;
    password:string;

    constructor(
        _id:any,
        _username:string,
        _password:string) {
            this.id=_id;
        this.username=_username;
        this.password=_password;
    }
}