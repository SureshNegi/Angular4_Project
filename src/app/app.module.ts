import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource  } from 'ng2-smart-table';
import {DataTableModule} from 'primeng/datatable';
import { FormsModule ,ReactiveFormsModule,FormControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { SmarttableExampleComponent } from './components/smarttable-example/smarttable-example.component';
import { NgprimeTableExampleComponent } from './components/ngprime-example/ngprime-table-example/ngprime-table-example.component';
import {UsernameValidator} from './shared/username-email-validator';
import { MyTableComponent } from './components/my-table/my-table.component';
import { TblColumnComponent } from './components/tbl-column/tbl-column.component';
import { Routes, RouterModule } from '@angular/router';
import { UserWelcomeComponent } from './components/wecome-user/wecomeUser.component';
import { SignupComponent} from './components/shared/signup/signup.component';
import { SigninComponent } from './components/shared/signin/signin.component'
import { SharedService } from './services/shared';
import { AppRoutingModule } from './/app-routing.module'
const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy.module#LazyModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    SmarttableExampleComponent,
    NgprimeTableExampleComponent,    
    MyTableComponent, TblColumnComponent, UserWelcomeComponent,SignupComponent,SigninComponent
  ],
  imports: [
    
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    DataTableModule,
    AppRoutingModule
     
  ],
  providers: [UsernameValidator,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
