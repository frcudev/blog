import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'frcu-dev-blog-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostComponent implements OnInit {
  post = new FormGroup({
    title: new FormControl('', [Validators.required]),
    tags: new FormArray([], [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  addOnBlur = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(this.fb.control(value.trim()));
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: any) {
    const index = this.tags.controls.indexOf(tag);

    if (index >= 0) {
      this.tags.removeAt(index);
    }
  }
}
