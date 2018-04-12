import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserWelcomeComponent } from './components/wecome-user/wecomeUser.component';
import { SignupComponent} from './components/shared/signup/signup.component';
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: UserWelcomeComponent },
  { path: 'signin', component: SignupComponent }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
