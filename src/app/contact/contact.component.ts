import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";


import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';


import { backgroundTrigger, overlayTrigger, contentTrigger } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ backgroundTrigger, overlayTrigger, contentTrigger ]
})
export class ContactComponent implements OnInit {
myForm: FormGroup;
subscription: Subscription;
backgroundState: string;
overlayState: string;
contentState: string;
route: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.overlayState = 'hidden';
    this.contentState = 'hidden';
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    })
    this.subscription = this.appService.navigationChanged
      .subscribe(
        (route: string) => {
          console.log("got it!! the route here is... " + route);
             this.backgroundState = 'leave';
              this.route = route;
        }
      );
  }

  animationDone(event) {
    if(event.triggerName == 'backgroundState' && event.toState == 'show' ) {
        this.overlayState = 'enter';
    }
    else if(event.triggerName == 'overlayState' && event.toState == 'enter' ) {
        this.contentState = 'enter';
    }
    else if(event.toState == 'leave') {
        // reset states
        this.backgroundState = 'show';
        this.overlayState = 'hidden';
        this.contentState = 'hidden';
        this.router.navigateByUrl('/' + this.route);
    }
  }


    submitContactForm(){
        let emailBundle = {
          name: this.myForm.value.name,
          email: this.myForm.value.email,
          subject: this.myForm.value.subject,
          body: this.myForm.value.body
        }

        this.appService.submitContact(emailBundle);
        this.myForm.reset();

    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}