import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'frcu-dev-blog-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
