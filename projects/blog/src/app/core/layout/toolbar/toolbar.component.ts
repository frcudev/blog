import {Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {LoadingService} from '../../services/loading.service';
import {ResponsiveLayoutService} from '../responsive-layout.service';

@Component({
  selector: 'frcu-dev-blog-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isLoading: Observable<boolean>;
  isResponsiveLayout: Observable<boolean>;
  columnCount: Observable<number>;

  constructor(
    private responsiveLayoutService: ResponsiveLayoutService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.isResponsiveLayout = this.responsiveLayoutService.isSmallOrSmaller.pipe(
      shareReplay({bufferSize: 1, refCount: true})
    );
    this.columnCount = this.responsiveLayoutService.columnCount;
    this.isLoading = this.loadingService.isLoading;
  }

  toggleMenu() {
    this.toggle.emit();
  }
}
