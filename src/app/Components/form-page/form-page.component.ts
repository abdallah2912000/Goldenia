import { Component, OnInit } from '@angular/core';
import { FormHeaderComponent } from './form-header/form-header.component';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
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
export class FormPageComponent implements OnInit {
  [x: string]: any;

  errorMessage = '';

  formGroup = this._formBuilder.group({
    firstCtrl: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    country : ['', [Validators.required]]
  });


  isLinear: boolean = true;

  interstes:string[] = [];
  interstedIn: CheckBox[] = [
    {
      name: "Digitalize your money & investments",
      completed : false
    },
    {
      name: "Rewards up to 70%",
      completed : false
    },
    {
      name: "No cards but mobile wallet",
      completed : false
    },
    {
      name: "Preserve you money value",
      completed : false
    },
  ];
  
  favoriteFees!: string;
  fees: string[] = ['Subscription Fee', 'Subscription', 'Incremental'];
  
  constructor(private _formBuilder: FormBuilder,private dataServise: DataFormService) {
    merge(this.formGroup.statusChanges, this.formGroup.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    
  }


  updateErrorMessage() {
    if (this.formGroup.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.formGroup.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  };


  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

  details: DataForm[]= [];
  newData: DataForm = {
    name: this.formGroup.value.firstCtrl,
    phone: this.formGroup.value.phone,
    email: this.formGroup.value.email,
    country: this.formGroup.value.country,
    interstedIn: ["Digitalize your money & investments"],
    fees: this.favoriteFees,
  } as unknown as DataForm;

  savedData() : void{
    const savedData = {
      id: this.getRandomNumber(),
      name: this.newData.name,
      phone: this.newData.phone,
      country : this.newData.country,
      email: this.newData.email,
      interstedIn : [],
      fees: this.newData.fees,
      suggestions: this.newData.suggestions,
    }
    this.dataServise.saveData(savedData).subscribe((data) => {
      this.details.push(data);
    })
  }
}
