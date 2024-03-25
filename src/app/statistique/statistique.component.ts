import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CoachService } from '../service/coach.service';
import { Coach } from '../model/coach';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  chartBar :any = null;
  chartPie:any =null;
  coachs :Coach[] = [];
  labels = ['Mineur','Majeur']
  count : any[]= [];
  constructor(public coachService : CoachService ) { }
  
  ngOnInit(): void {
    this.getAll();
    this.chartBarfunction();
  
  }

  getAll(){
    this.coachService.getAll().subscribe(
      (data: Coach[])=>{
          this.coachs = data;
          this.count[0]=this.coachs.filter((c) => c.age < 18 ).length
  
          this.count[1]=this.coachs.filter(c => c.age >= 18 ).length
      

          console.log(this.count)
          this.chartPieFunction();
          
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  
  chartBarfunction(){
    this.chartBar =  new Chart('chart1', 
    {
     type:"bar",
     data: {
       labels: ['Janvier','Fevrier','Mars'],
       datasets: [{
       label: 'My First Dataset',
       data: [65, 59,10],
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(255, 159, 64, 0.2)',
       ],
       borderColor: [
         'rgb(255, 99, 132)',
         'rgb(255, 159, 64)',
       ],
       borderWidth: 1
     }]
     },
      options: {
         scales: {
           y: {
             beginAtZero: true
           },
        
         },
       },
 });
 
}

chartPieFunction(){
  this.chartPie =  new Chart('chart2', 
  {
   type:"pie",
   data: {
     labels: this.labels,
     datasets: [{
     label: 'My First Dataset',
     data: this.count,
     backgroundColor: [
       'rgba(255, 99, 132, 0.2)',
       'rgba(255, 159, 64, 0.2)',
     ],
     borderColor: [
       'rgb(255, 99, 132)',
       'rgb(255, 159, 64)',
     ],
     borderWidth: 1
   }]
   },
    options: {
       scales: {
         y: {
           beginAtZero: true
         },
      
       },
     },
});
}
}
