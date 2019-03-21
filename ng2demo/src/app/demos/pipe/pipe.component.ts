import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  money = 100;
  moneyList= [5,25,33,41,83,98];
  newMoney;
  constructor() { }

  ngOnInit() {
  }

  addMoney(){
    if(this.newMoney){
      this.moneyList.push(this.newMoney);
    }
  }


  fetchMoney = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(200),1000);
  });

}
