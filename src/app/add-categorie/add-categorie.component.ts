import { Component, OnInit } from '@angular/core';
import { Categories } from '../model/categories';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../service/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  libelle :string ="";
  id = null;

  categorie : Categories = new Categories();
  constructor(public CategoriesService:CategoriesService,
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
      this.categorie.libelle = this.libelle;
      this.categorie.id = this.id;
      this.CategoriesService.updatCategorie(this.id,this.categorie).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/categorie')
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
          this.categorie.libelle = this.libelle;
         
          this.CategoriesService.addCategorie(this.categorie).subscribe(
            (data)=>{
                this.router.navigateByUrl('/categorie');
                console.log("Utilisateur ajouté avec succès")
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
    this.CategoriesService.getById(id).subscribe(
      (data : Categories)=>{
        console.log(data)
        this.libelle = data.libelle ?? "";
        
      },
      (error) =>{

      }
    )
  }

}
