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

      return this.http.post('/api/mailgun', body, { headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(data => {
        // Read the response data.
        console.log(data);
      });

    }



}
