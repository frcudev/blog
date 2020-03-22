import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'frcu-dev-blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (!user) {
        return;
      } else {
        const returnUrl = localStorage.getItem('returnUrl');

        if (!returnUrl) {
          return;
        }

        localStorage.removeItem('returnUrl');

        this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
