import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { backgroundTrigger, overlayTrigger, contentTrigger } from '../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [ backgroundTrigger, overlayTrigger, contentTrigger ]
})
export class PortfolioComponent implements OnInit {
  subscription: Subscription;
  backgroundState: string;
  overlayState: string;
  contentState: string;
  route: string;

  projects = [
    {
      name: 'nicefinds',
      description: 'Lorem ipsum dolor sit amet, dicant civibus persecuti no ius. Et mediocrem erroribus argumentum mea, exerci adipisci splendide ex eos, ea usu blandit imperdiet quaerendum. Mel ea rebum iudico numquam. Ut mel option integre, sed ex dico utamur ullamcorper. Alii legimus cu has, munere dissentiet ei usu.',
      link: 'http://www.nicefinds.net/',
      imgUrl: 'https://s24.postimg.org/qebts6yrp/logo_favicon.png',
      technologies: [ 'Angular', 'MongoDB', 'Express', 'Node.js', 'BootStrap', 'HTML/CSS' ],
      apis: ['Amazon Product API', 'Twitter API', 'Bitly API', 'Webshot API']
    },
    {
      name: 'learndevanagari',
      description: 'Id tempor altera fabulas usu. Augue tamquam pertinacia duo ut, duo cu error nominati explicari, eum mollis aliquando reprimique te. Eam ei facer facete. Magna mediocrem cu sea, agam reformidans ut est.',
      link: 'https://learndev.herokuapp.com/',
      imgUrl: 'https://s9.postimg.org/topy52rm7/Screen_Shot_2017-03-10_at_1.01.31_PM.png',
      technologies: [ 'Angular', 'MongoDB', 'Express', 'Node.js', 'BootStrap', 'HTML/CSS' ],
      apis: ['Amazon Product API', 'Twitter API', 'Bitly API']
    },
    {
      name: 'ngportfolio',
      description: 'At laudem persequeris qui, vis molestiae adipiscing at, liberavisse comprehensam mei ad. Nonumy tibique duo ut, at corpora adversarium per, pro in nostrum aliquando. Ad nam oblique tibique molestiae. Qui tation homero labitur ad, vim eu doctus pericula. Erant tation conclusionemque in per.',
      link: 'https://michaelcom.herokuapp.com/',
      imgUrl: 'https://s17.postimg.org/6ytcmy4zj/Copy_of_logo_favicon_ngportfolio.png',
      technologies: [ 'Angular', 'MongoDB', 'Express', 'Node.js', 'BootStrap', 'Angular Animations', 'HTML/CSS'],
      apis: []
    }
  
  ]

 constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.overlayState = 'hidden';
    this.contentState = 'hidden';
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
