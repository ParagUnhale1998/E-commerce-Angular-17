import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './user-details-form.component.html',
  styleUrl: './user-details-form.component.scss'
})
export class UserDetailsFormComponent {
  @Input() initialValues: any;
  @Output() onSubmit = new EventEmitter<any>();

  userDetailsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      fullName: [this.initialValues?.fullName || '', Validators.required],
      area: [this.initialValues?.area || '', Validators.required],
      houseNumber: [this.initialValues?.houseNumber || ''],
      pinCode: [this.initialValues?.pinCode || '', Validators.required],
      city: [this.initialValues?.city || '', Validators.required],
      email: [
        this.initialValues?.email || '',
        [Validators.required, Validators.email]
      ]
    });
  }

  onSubmitForm() {
    if (this.userDetailsForm.valid) {
      this.onSubmit.emit(this.userDetailsForm.value);
    }
  }

}
