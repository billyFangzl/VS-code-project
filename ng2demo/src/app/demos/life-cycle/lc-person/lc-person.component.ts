import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Person } from '../../shared/models/person';


@Component({
  selector: 'app-lc-person',
  templateUrl: './lc-person.component.html',
  styleUrls: ['./lc-person.component.css']
})
export class LcPersonComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() person:Person;
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(new Date()+'- ngOnChanges',changes)
  }
  

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(new Date()+'- ngDoCheck')
  }

  ngAfterContentInit(){
    console.log(new Date()+'- ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log(new Date()+'- ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log(new Date()+'- ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log(new Date()+'- ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log(new Date()+'- ngOnDestroy')
  }






}
