import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {SettingsService} from '../../core/services/settings.service';

@Component({
  selector: 'frcu-dev-blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (!user) {
        return;
      } else {
        const settings = this.settingsService.getSettings();

        if (!settings?.returnUrl) {
          return;
        }

        this.settingsService.updateSettings({returnUrl: ''});

        this.router.navigateByUrl(settings.returnUrl);
      }
    });
  }
}
