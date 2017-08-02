/* source: https://alligator.io/angular/firebase-authentication-angularfire2/ */
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userData = {
    uid: null,
    email: null,
    displayName: null
  };

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string, displayName: string) {
    const authC = this;
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        authC.userData.uid = value.uid;
        authC.userData.email = email;

        value.updateProfile({
          displayName: displayName
        }).then(() => {
          console.log('Update display name success!');
          authC.userData.displayName = value.displayName;
          authC.setUserDateToLocalStorage(authC.userData);
          authC.router.navigate(['/home']);
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
    const authC = this;
    if (email && password) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          setTimeout(() => {
            authC.userData.displayName = value.displayName;
            authC.userData.email = value.email;
            authC.userData.uid = value.uid;
            authC.setUserDateToLocalStorage(authC.userData);
            authC.router.navigate(['/home']);
          }, 100);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
          console.log(err);
        });
    }
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    location.pathname = '/login';
  }

  setUserDateToLocalStorage(userData) {
    if (userData) {
      let email;
      email = !userData.email || userData.email === null || userData.email === 'null' ? '' : userData.email;
      localStorage.setItem('displayName', userData.displayName);
      localStorage.setItem('email', email);
      localStorage.setItem('uid', userData.uid);
      // localStorage.setItem('photoURL', userData.photoURL);
      // localStorage.setItem('providerId', userData.providerData[0].providerId);
      // this.createAccount(userData.uid, userData.email, userData.photoURL, userData.displayName);
      return;
    }
  }

  /*createAccount(uid, email, photoURL, displayName) {
    const itemToPut = {
      email: email,
      photoURL: photoURL,
      displayName: displayName
    };
    const acountItem = this.db.object('/accounts/' + uid, {preserveSnapshot: true});
    // Check account is exist or not?
    acountItem.subscribe(snapshot => {
      console.log(snapshot.key);
      console.log(snapshot.val());
      if (snapshot.val()) {
        // Already account
        acountItem.update(itemToPut);
      } else {
        // Create new account
        const acounts = this.db.object('/accounts', {preserveSnapshot: true});
        const acountToPut = {};
        acountToPut[uid] = itemToPut;
        acounts.update(acountToPut);
      }
    });
  }*/

}
