import { Component, OnInit } from '@angular/core';
import { Marques } from '../model/marques';
import { NgForm } from '@angular/forms';
import { MarquesService } from '../service/marques.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {
  libelle :string ="";
  id = null;

  marque : Marques = new Marques();
  constructor(public MarquesService:MarquesService,
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
      this.marque.libelle = this.libelle;
      this.marque.id = this.id;
      this.MarquesService.updatMarque(this.id,this.marque).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/marque')
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
          this.marque.libelle = this.libelle;
         
          this.MarquesService.addMarque(this.marque).subscribe(
            (data)=>{
                this.router.navigateByUrl('/marque');
                console.log("Marque ajouté avec succès")
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
    this.MarquesService.getById(id).subscribe(
      (data : Marques)=>{
        console.log(data)
        this.libelle = data.libelle ?? "";
        
      },
      (error) =>{

      }
    )
  }

}
