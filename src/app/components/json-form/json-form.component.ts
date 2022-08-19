import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFormControls, JsonFormData } from 'src/app/shared/model/data';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
})
export class JsonFormComponent implements OnInit, OnChanges {

  @Input() jsonFormData!: JsonFormData;

  myForm: FormGroup = this._fb.group({});
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      this.createForm(this.jsonFormData.controls);
      console.log(this.jsonFormData.controls);
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsArray = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'required':
            validatorsArray.push(Validators.required);
            break;
          case 'email':
            validatorsArray.push(Validators.email);
            break;
          case 'minLength':
            validatorsArray.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsArray.push(Validators.maxLength(value));
            break;
          default:
            break;
        }
      }

      this.myForm.addControl(
        control.name,
        this._fb.control(control.value, validatorsArray)
      );
    }
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
    this.myForm.reset();
  }

}
