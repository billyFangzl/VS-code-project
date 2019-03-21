import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-parent',
  templateUrl: './cc-parent.component.html',
  styleUrls: ['./cc-parent.component.css']
})
export class CcParentComponent implements OnInit {

  
  person={
    name:"Bob",
    age:20
  }
  
  constructor() { }

  ngOnInit() {
  }

  parentAddAge(data:number){
    this.person.age = data;
  }
}
