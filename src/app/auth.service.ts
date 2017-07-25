/* source: https://alligator.io/angular/firebase-authentication-angularfire2/ */
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  uid: string;
  displayName: string;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string, displayName: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.uid = value.uid;
        value.updateProfile({
          displayName: displayName
        }).then(() => {
          console.log('Update display name success!');
          this.displayName = value.displayName;
        }, err2 => {
          console.log('Update display name fail:', err2.message);
          console.log(err2);
        });
      })
      .catch(err => {
        console.log('Something went wrong:' , err.message);
        console.log(err);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        this.uid = value.uid;
        location.pathname = '/home';
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        console.log(err);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    location.pathname = '/login';
  }

}
