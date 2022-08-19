import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormData } from './shared/model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  formData! : JsonFormData;
 
  constructor(private _http : HttpClient){

  }
  ngOnInit(): void {
    this._http.get<JsonFormData>('./assets/my-Form.json')
                .subscribe((res : JsonFormData) =>{
                  this.formData = res;
                })
  }

}
