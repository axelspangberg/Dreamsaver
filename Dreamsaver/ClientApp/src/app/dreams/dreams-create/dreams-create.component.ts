import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dreams-create',
  templateUrl: './dreams-create.component.html',
  styleUrls: ['./dreams-create.component.scss'],
})
export class DreamsCreateComponent implements OnInit {
  formGroup: FormGroup;
  submitted: boolean;
  titleAlert = 'This field is required';
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    this.toastr.success('Saved');
  }

  onReset() {
    this.submitted = false;
    this.formGroup.reset();
  }
}
