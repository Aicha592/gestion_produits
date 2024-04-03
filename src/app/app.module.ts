import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { CategoriesPipe } from './pipe/categories.pipe';
import { MarquesPipe } from './pipe/marques.pipe';
import { ProduitsPipe } from './pipe/produits.pipe';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListMarqueComponent } from './list-marque/list-marque.component';
import { StatistiqueComponent } from './statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AddUserComponent,
    AddCategorieComponent,
    AddMarqueComponent,
    AddProduitComponent,
    CategoriesPipe,
    MarquesPipe,
    ProduitsPipe,
    ListProduitComponent,
    ListCategorieComponent,
    ListMarqueComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
