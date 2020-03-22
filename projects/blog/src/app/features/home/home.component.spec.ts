import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import 'firebase/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
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
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
