import {TestBed, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {AngularFireModule} from '@angular/fire';
import {RouterTestingModule} from '@angular/router/testing';
import 'firebase/firestore';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // firebase
        AngularFireModule.initializeApp({
          apiKey: 'abc123',
          authDomain: 'abc123',
          databaseURL: 'abc123',
          projectId: 'abc123',
          storageBucket: 'abc123',
          messagingSenderId: 'abc123',
          appId: 'abc123',
          measurementId: 'abc123',
        }),
        AngularFirestoreModule,
      ],
      providers: [AuthService],
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
