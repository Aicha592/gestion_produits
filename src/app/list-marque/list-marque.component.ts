import { Component, OnInit } from '@angular/core';
import { MarquesService } from '../service/marques.service';
import { Marques } from '../model/marques';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-marque.component.html',
  styleUrls: ['./list-marque.component.css']
})
export class ListMarqueComponent implements OnInit {
  marque :Marques[] = [];
  constructor(public MarquesService:MarquesService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.MarquesService.getAll().subscribe(
      (data)=>{
          this.marque = data;
          console.log(this.marque)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteMarque(id:any){

    Swal.fire({
      title: "Voulez-vous  vraiment supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {
     
      if (result.isConfirmed) {
        this.MarquesService.deleteMarque(id).subscribe(
          (data)=>{
              this.getAll();
              Swal.fire("Marque supprimé avec succes", "", "success");
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
