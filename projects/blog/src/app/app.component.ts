import {Component} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'frcu-dev-blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }
}
