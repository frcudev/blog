import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import 'firebase/firestore';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {LoadingService} from './core/services/loading.service';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CoreModule,
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
      declarations: [AppComponent],
      providers: [LoadingService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
