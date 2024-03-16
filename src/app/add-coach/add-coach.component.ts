import { Component, OnInit } from '@angular/core';
import { Coach } from '../model/coach';
import { NgForm } from '@angular/forms';
import { CoachService } from '../service/coach.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent implements OnInit {
  name :string ="";
  age :number = 0;
  coach : Coach = new Coach();
  constructor(public coachService:CoachService,
              public router : Router) { }

  ngOnInit(): void {
 
  
  }

  save(values:NgForm){
    Swal.fire({
      title: "Voulez vous ajouter une ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {
     
      if (result.isConfirmed) {
        this.coach.name = this.name;
        this.coach.age = this.age;
    
        this.coachService.addCoach(this.coach).subscribe(
          (data)=>{
              this.router.navigateByUrl('/coach');
              console.log("Merci")
          },
          (error)=>{
            console.log(error)
          }
        )
      
      }
    });





  


 
  }

}
