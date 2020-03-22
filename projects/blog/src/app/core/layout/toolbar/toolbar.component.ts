import {Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {ResponsiveLayoutService} from '../responsive-layout.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'frcu-dev-blog-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isResponsiveLayout$: Observable<boolean>;
  columnCount$: Observable<number>;
  user$: Observable<User | null>;

  constructor(
    private responsiveLayoutService: ResponsiveLayoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isResponsiveLayout$ = this.responsiveLayoutService.isSmallOrSmaller$.pipe(
      shareReplay({bufferSize: 1, refCount: true})
    );
    this.columnCount$ = this.responsiveLayoutService.columnCount$;
    this.user$ = this.authService.user$;
  }

  toggleMenu() {
    this.toggle.emit();
  }

  signOut() {
    this.authService.signOut().then(() => this.router.navigate(['/']));
  }
}
