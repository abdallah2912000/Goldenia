import { Component } from '@angular/core';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { DataForm } from '../../models/data-form';
import { CheckBox } from '../../models/check-box';
import { DataFormService } from '../../service/data-form.service';



@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    FormHeaderComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    JsonPipe,
    MatRadioModule,
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {
  [x: string]: any;

  errorMessage = '';

  stepOne = this._formBuilder.group({
    firstCtrl: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', [Validators.required]],
  });
  stepTwo = this._formBuilder.group({})
  stepThree = this._formBuilder.group({
    fees: ['', [Validators.required]]
  })
  stepFour = this._formBuilder.group({
    sug: ['', [Validators.required]]
  })


  interstes: string[] = [];
  interstedIn: CheckBox[] = [
    {
      name: "Digitalize your money & investments",
      completed: false
    },
    {
      name: "Rewards up to 70%",
      completed: false
    },
    {
      name: "No cards but mobile wallet",
      completed: false
    },
    {
      name: "Preserve you money value",
      completed: false
    },
  ];


  fees: string[] = ['Subscription Fee', 'Subscription', 'Incremental'];

  constructor(private _formBuilder: FormBuilder, private dataServise: DataFormService) {
    merge(this.stepOne.statusChanges, this.stepOne.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }


  updateErrorMessage() {
    if (this.stepOne.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.stepOne.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  };


  newData: DataForm = {
    name: this.stepOne.value.firstCtrl,
    phone: this.stepOne.value.phone,
    email: this.stepOne.value.email,
    country: this.stepOne.value.country,
    interstedIn: ["Digitalize your money & investments"],
    fees: this.stepThree.value.fees,
    suggestions: this.stepFour.value.sug,
  };



  saveingData(): void {
    const savedData = {
      name: this.newData.name,
      phone: this.newData.phone,
      country: this.newData.country,
      email: this.newData.email,
      interstedIn: [],
      fees: this.newData.fees,
      suggestions: this.newData.suggestions,
    }

    this.dataServise.saveData(savedData).subscribe((response) => {
      console.log(response);
    })
  }
}

