import {TestBed, inject} from '@angular/core/testing';
import 'firebase/firestore';
import {AngularFireModule} from '@angular/fire';

import {PostService} from './post.service';

describe('Service: Post', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
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
      ],
      providers: [PostService],
    })
  );

  it('should ...', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
