import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
 { path: '', redirectTo: '/about', pathMatch: 'full' },
 { path: 'about', component: AboutComponent },
 { path: 'portfolio', component: PortfolioComponent },
 { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
