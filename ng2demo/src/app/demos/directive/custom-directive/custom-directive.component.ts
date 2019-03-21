import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  @Input()
  person

  constructor() { }

  ngOnInit() {
  }

  togglePerson(){
    this.person = this.person?null:{name:'Bob'};
  }

}
