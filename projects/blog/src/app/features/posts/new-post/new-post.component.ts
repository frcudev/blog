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
    tags: new FormArray([], [Validators.required, Validators.minLength(1), Validators.maxLength(4)]),
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

    if (!(value || '').trim()) {
      return;
    }

    if (this.tags.length >= 4) {
      input.value = '';

      return;
    }

    this.tags.push(this.fb.control(value.trim()));

    input.value = '';
  }

  remove(tag: FormControl) {
    const index = this.tags.controls.indexOf(tag);

    if (index >= 0) {
      this.tags.removeAt(index);
    }
  }

  hasError(control: string, validatorName: string) {
    let hasError = false;

    if (this.post && control) {
      hasError = this.post.controls[control].hasError(validatorName) && this.post.controls[control].touched;
    }

    return hasError;
  }
}
