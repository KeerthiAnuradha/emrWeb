import { AuthService } from './auth.service';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class mockauthservice extends AuthService {
    authendicate: any = {username: "Admin"};
    
    loginDetails(username, password) {
        if (username == 'Admin' && password == 'Admin@123') {
            return this.authendicate;
        }
        else {
            return {};
        }
    }
}