import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'frcu-dev-blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => this.router.navigate(['/home']));
  }

  loginWithGitHub() {
    this.authService.loginWithGitHub().then(() => this.router.navigate(['/home']));
  }
}
