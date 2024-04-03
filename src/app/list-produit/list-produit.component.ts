import { Component, OnInit } from '@angular/core';

import { ProduitsService } from '../service/produits.service';
import { Produits } from '../model/produits';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: Produits[] = [];

  constructor(public ProduitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() : void {
    this.ProduitsService.getAll().subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProduit(id: any) {
    Swal.fire({
      title: "Voulez-vous vraiment supprimer ce produit ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: "Non"
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProduitsService.deleteProduit(id).subscribe(
          () => {
            this.getAll();
            Swal.fire("Produit supprimé avec succès", "", "success");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
  

}
