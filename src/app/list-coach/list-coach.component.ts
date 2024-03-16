import { Component, OnInit } from '@angular/core';
import { CoachService } from '../service/coach.service';
import { Coach } from '../model/coach';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-coach',
  templateUrl: './list-coach.component.html',
  styleUrls: ['./list-coach.component.css']
})
export class ListCoachComponent implements OnInit {

  coachs :Coach[] = [];
  constructor(public coachService:CoachService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.coachService.getAll().subscribe(
      (data)=>{
          this.coachs = data;
          console.log(this.coachs)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteCoach(id:any){

    Swal.fire({
      title: "Voulez vous supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {
     
      if (result.isConfirmed) {
        this.coachService.deleteCoach(id).subscribe(
          (data)=>{
              this.getAll();
              Swal.fire("Suppresion avec succes", "", "success");
              console.log(data)
          },
          (error)=>{
            console.log(error);
          }
        )
      
      }
    });


  }

}
