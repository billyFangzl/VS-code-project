import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {


  constructor() {

   }

  ngOnInit() {
  }

  onSubmit(formValue){
    console.log(formValue);
  }
}
