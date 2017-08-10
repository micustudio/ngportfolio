import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
  navigationChanged = new Subject<String>();
  outsideMenuClicked = new Subject<boolean>();

  constructor(private router: Router,
              private http: HttpClient) { }

  helloFromAppService(){
    console.log("Hello!");
  }

  closeMenu(){
    this.outsideMenuClicked.next(true);
    console.log("yes was clicked outside.");
  }

  navigate(route: string) {
    this.navigationChanged.next(route);
    console.log("the routes is... " + route);
    // this.router.navigateByUrl('/' + route);
  }

    submitContact(email){
        const body = JSON.stringify(email);
        // console.log("The body for USER is!!!!");
        // console.log(body);
        // const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post(domain + 'user/', body, {headers: headers})
        //         .map((response: Response) => {
        //           const retrievedUser = response.json();
        //           console.log("The retrievedUser is ");
        //           console.log(retrievedUser);
        //         })
        //         .catch((error: Response) => Observable.throw(error.json()));

      return this.http.post('/api/mailgun', body, { headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data);
      });
      
    }



}
