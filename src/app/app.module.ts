import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { ManageBucketService } from './manage-bucket.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BucketListComponent } from './home/bucket-list/bucket-list.component';
import { NewBucketComponent } from './new-bucket/new-bucket.component';
import { EditBucketComponent } from './edit-bucket/edit-bucket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BucketDetailComponent } from './bucket-detail/bucket-detail.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdButtonModule, MdInputModule, MdGridListModule, MdSidenavModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-bucket', component: NewBucketComponent },
  { path: 'edit-bucket/:id', component: EditBucketComponent },
  { path: 'bucket-detail/:id', component: BucketDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BucketListComponent,
    NewBucketComponent,
    EditBucketComponent,
    PageNotFoundComponent,
    BucketDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdSidenavModule
  ],
  providers: [AuthService, ManageBucketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
