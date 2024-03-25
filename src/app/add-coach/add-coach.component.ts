import { Component, OnInit } from '@angular/core';
import { Coach } from '../model/coach';
import { NgForm } from '@angular/forms';
import { CoachService } from '../service/coach.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css']
})
export class AddCoachComponent implements OnInit {
  name :string ="";
  age :number = 0;
  id = null;
  coach : Coach = new Coach();
  constructor(public coachService:CoachService,
              public router : Router,
              public param: ActivatedRoute) { }

  ngOnInit(): void {

    this.id =this.param.snapshot.params['id'];
    if(this.id){

      this.getById(this.id);
    
    }
  
  }

  save(values:NgForm){

    if(this.id){
      //Update
      this.coach.name = this.name;
      this.coach.age = this.age;
      this.coach.id = this.id;
      this.coachService.updatCoach(this.id,this.coach).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/coach')
        },
        (error)=>{
          console.log(error)        
        }
      )
    }else{
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
  getById(id:any){
    this.coachService.getById(id).subscribe(
      (data : Coach)=>{
        console.log(data)
        this.name = data.name ?? "";
        this.age = data.age ?? 0;
      },
      (error) =>{

      }
    )
  }

}
