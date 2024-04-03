import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produits } from '../model/produits';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private api = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${this.api}/produit`);
  }

  getById(id: any): Observable<Produits> {
    return this.http.get<Produits>(`${this.api}/produit/${id}`);
  }

  deleteProduit(id: any): Observable<any> {
    return this.http.delete(`${this.api}/produit/${id}`);
  }

  addProduit(produit: Produits): Observable<any> {
    return this.http.post(`${this.api}/produit`, produit);
  }

  updateProduit(id: any, produit: Produits): Observable<any> {
    return this.http.put(`${this.api}/produit/${id}`, produit);
  }

  getMarqueLibelleById(id: number): Observable<string> {
    return this.http.get<any>(`${this.api}/marques/${id}`).pipe(
      map(response => response.libelle) 
    );
  }
  getCategorieLibelleById(id: number): Observable<string> {
    return this.http.get<any>(`${this.api}/categories/${id}`).pipe(
      map(response => response.libelle) 
    );
  }
 

  getNombreProduitsParMarque(): Observable<any[]> {
    return this.getAll().pipe(
      map((produits: Produits[]) => {
        const countMap = new Map();
        produits.forEach((produit: Produits) => {
          const marque = produit.marqueId;
          countMap.set(marque, (countMap.get(marque) || 0) + 1);
        });
        return Array.from(countMap.entries()).map(([marque, count]) => ({ marque, count }));
      })
    );
  }

  getNombreProduitsParCategorie(): Observable<any[]> {
    return this.getAll().pipe(
      map((produits: Produits[]) => {
        const countMap = new Map();
        produits.forEach((produit: Produits) => {
          const categorie = produit.categorieId;
          countMap.set(categorie, (countMap.get(categorie) || 0) + 1);
        });
        return Array.from(countMap.entries()).map(([categorie, count]) => ({ categorie, count }));
      })
    );
  }

  
  
}
