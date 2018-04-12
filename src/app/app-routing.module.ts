import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserWelcomeComponent } from './components/wecome-user/wecomeUser.component';
import { SignupComponent} from './components/shared/signup/signup.component';
import { SigninComponent} from './components/shared/signin/signin.component';
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: UserWelcomeComponent },
  { path: 'signin', component: SigninComponent }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
