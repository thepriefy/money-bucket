import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class ManageBucketService {
  // item: FirebaseObjectObservable<any>;
  bucket_item: FirebaseObjectObservable<any[]>;
  // current_user: Object;
  // user_bucket_path = '/Users';
  current_uid: string;
  bucket_list: FirebaseListObservable<any[]>;
  bucket_owners_list: FirebaseListObservable<any[]>;
  bucket_path = '/Buckets';
  bucket_owner_path = '/Bucket_owner';
  queryObservable: any;

  constructor(public db: AngularFireDatabase, private firebaseAuth: AngularFireAuth, private router: Router) {
    this.current_uid = localStorage.getItem('uid');
    this.bucket_list = db.list(this.bucket_path);
    this.bucket_owners_list = db.list(this.bucket_owner_path);
    // this.current_user = this.firebaseAuth.auth.currentUser;
    // this.current_uid = this.firebaseAuth.auth.currentUser.uid;
  }

  createBucket(bucket_name: string) {
    const manageC = this;
    /* create bucket with total equal to 0 */
    const b_result = this.bucket_list.push({ name: bucket_name, total: 0, creator: this.current_uid});
    const bucket_key = b_result.key;

    /* add bucket owner */
    const o_result = this.bucket_owners_list.push({ bucket_key: bucket_key, name: bucket_name, uid: this.current_uid});

    manageC.router.navigate(['/home']);
  }

  getBucketList() {
    this.queryObservable = this.db.list(this.bucket_owner_path, {
      query: {
        orderByChild: 'uid',
        equalTo: this.current_uid
      }
    });

    return this.queryObservable;
  }

  getBucketDetail(bucket_id) {
    this.bucket_item = this.db.object(this.bucket_path + '/' + bucket_id);

    return this.bucket_item;
  }

  getBucketRecords() {}

  editBucket() {}

  deleteBucket() {}

  addIncome() {}

  getIncomeDetail() {}

  editIncome() {}

  deleteIncome() {}

  addExpense() {}

  getExpenseDetail() {}

  editExpense() {}

  deleteExpense() {}
}
