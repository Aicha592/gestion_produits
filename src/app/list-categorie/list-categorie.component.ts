import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../service/categories.service';
import { Categories } from '../model/categories';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categorie :Categories[] = [];
  constructor(public CategoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.CategoriesService.getAll().subscribe(
      (data)=>{
          this.categorie = data;
          console.log(this.categorie)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteCategorie(id:any){

    Swal.fire({
      title: "Voulez-vous  vraiment supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {
     
      if (result.isConfirmed) {
        this.CategoriesService.deleteCategorie(id).subscribe(
          (data)=>{
              this.getAll();
              Swal.fire("Catégorie supprimé avec succes", "", "success");
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
