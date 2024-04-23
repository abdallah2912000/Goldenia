import { Component } from '@angular/core';
import { FormHeaderComponent } from './form-header/form-header.component';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl,FormArray} from '@angular/forms';
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
    MatRadioModule
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {
  [x: string]: any;
  // email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';


  formGroup = this._formBuilder.group({
    firstCtrl: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
  });


  isLinear: boolean = true;

  intersted!:string[];
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
  selectedIntrests: string[] =[]  

  onChecked(){
    for(let i = 0; i >= this.interstedIn.length; i++) {
      if(this.interstedIn[i].completed === true){
        this.intersted.push(this.interstedIn[i].name);
      }
    }
  }
  

  favoriteFees!: string;
  fees: string[] = ['Subscription Fee', 'Subscription', 'Incremental'];

  

  constructor(private _formBuilder: FormBuilder) {
    merge(this.formGroup.statusChanges, this.formGroup.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }


  // if (this.email.value === "") {
  //   this.isLinear = true;
  // }


  updateErrorMessage() {
    if (this.formGroup.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.formGroup.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  data: [] = [];
  newData: DataForm = {} as DataForm
  
  onChange(){
    // if(){

    // }
  }
  

}
