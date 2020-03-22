import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'frcu-dev-blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithGitHub() {
    this.authService.loginWithGitHub();
  }
}
