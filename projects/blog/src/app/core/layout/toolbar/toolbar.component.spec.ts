import {NO_ERRORS_SCHEMA, Component, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import 'firebase/firestore';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {LoadingService} from '../../services/loading.service';
import {ToolbarComponent} from './toolbar.component';

@Component({
  selector: 'frcu-dev-blog-mat-icon',
  template: '<span></span>',
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatTooltipModule,
        MatMenuModule,
        MatCardModule,
        MatDividerModule,
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
      providers: [LoadingService],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideModule(MatIconModule, {
        remove: {
          declarations: [MatIcon],
          exports: [MatIcon],
        },
        add: {
          declarations: [MockMatIconComponent],
          exports: [MockMatIconComponent],
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
