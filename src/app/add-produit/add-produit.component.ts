import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from '../service/produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from '../model/produits';
import { Categories } from '../model/categories'; 
import { Marques} from '../model/marques';
import { CategoriesService } from '../service/categories.service'; 
import { MarquesService } from '../service/marques.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  libelle: string = "";
  quantite: number = 0;
  categorieId: string = "";
  marqueId: string = "";
  id: any = null;
  categories: Categories[] = [];
  marques: Marques[] = [];

  constructor(
    public ProduitsService: ProduitsService,
    public router: Router,
    public param: ActivatedRoute,
    private CategoriesService: CategoriesService, 
    private MarquesService: MarquesService
    ) {}

  ngOnInit(): void {
    this.id = this.param.snapshot.params['id'];
    if (this.id) {
      this.getById(this.id);
    }
    this.loadCategories();
    this.loadMarques();
  }

  save(values: NgForm) {
    const produit = new Produits();
    produit.libelle = this.libelle;
    produit.quantite = this.quantite;
    produit.categorieId = this.categorieId;
    produit.marqueId = this.marqueId;

    if (this.id) {
      this.ProduitsService.updateProduit(this.id, produit).subscribe(
        () => {
          console.log("Produit mis à jour avec succès");
          this.router.navigateByUrl('/produit');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.ProduitsService.addProduit(produit).subscribe(
        () => {
          console.log("Produit ajouté avec succès");
          this.router.navigateByUrl('/produit');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getById(id: any) {
    this.ProduitsService.getById(id).subscribe(
      (data: Produits) => {
        console.log(data);
        this.libelle = data.libelle ?? "";
        this.quantite = data.quantite ?? 0;
        this.categorieId = data.categorieId ?? "";
        this.marqueId = data.marqueId ?? "";
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadCategories() {
    this.CategoriesService.getAll().subscribe(
      (data: Categories[]) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  loadMarques() {
    this.MarquesService.getAll().subscribe(
      (data: Marques[]) => {
        this.marques = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
