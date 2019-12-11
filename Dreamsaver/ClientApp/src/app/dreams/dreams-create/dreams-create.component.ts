import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DreamsService } from '../dreams.service';

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
    readonly service: DreamsService,
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
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

    const values: IDreamRequest = this.formGroup.value;
    const request: IDreamRequest = {
      title: values.title,
      description: values.description,
      amount: values.amount,
    };
    this.service.saveDreams(request).subscribe(() => {
      this.toastr.success('Saved');
    });
  }

  onReset() {
    this.submitted = false;
    this.formGroup.reset();
  }
}
