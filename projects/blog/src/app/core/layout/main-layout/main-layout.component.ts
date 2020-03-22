import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'frcu-dev-blog-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }
}
