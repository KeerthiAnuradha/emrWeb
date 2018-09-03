import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, Response, Headers,RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  loginDetails(username, password) {
    // const headers = new HttpHeaders(username ? {
    //   authorization: 'Basic ' + btoa(username + ':' + password)
    // } : {});
    let data1 = {
      username : username,
      password : password
    };
//     var headers = new Headers({ 'authorization': 'bearer ' ,
//     'Access-Control-Allow-Origin' : '*',
// 'Access-Control-Allow-Credentials':'true'});
   
//     return this.http.post('api/authenticate' , data ,headers {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//   })
let headers = new Headers({ "content-type": "application/x-www-form-urlencoded" });
let options = new RequestOptions();
options.headers = headers;

return this.http.post("api/authenticate", data1, { headers: {"Content-Type": "application/json",
"Accept": "application/json"}})
  // .map(response => {
  //   debugger
  //           localStorage.setItem("logged", JSON.stringify(response));
  //           debugger
  //           /* var userDetails = JSON.parse(response.json().UserDetails)[0];
  //           this.loggedInUserName = userDetails.UserName;
  //           this.loogedinUserId = userDetails.UserId; */
  //            return response['_body'];
   
  //     });
  }
}