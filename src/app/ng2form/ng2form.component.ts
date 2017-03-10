import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ng2form',
  styleUrls: [ './ng2form.component.css' ],
  templateUrl: './ng2form.component.html',
  providers: [FormBuilder]
})
export class Ng2FormComponent implements OnInit {
  
  public form: FormGroup;
  
  public constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(){
    this.form = this.formBuilder.group({
      field1: ''
    })
    this.form.get('field1').valueChanges.subscribe(value => { console.log(value);})
  }
}
