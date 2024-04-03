import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListMarqueComponent } from './list-marque/list-marque.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { StatistiqueComponent } from './statistique/statistique.component';


const routes: Routes = [
    { path: "user", component: ListUserComponent },
    { path: "addUser", component: AddUserComponent },
    { path: "updateUser/:id", component: AddUserComponent },
    { path: "categorie", component: ListCategorieComponent },
    { path: "addCategorie", component: AddCategorieComponent },
    { path: "updateCategorie/:id", component: AddCategorieComponent },
    { path: "marque", component: ListMarqueComponent },
    { path: "addMarque", component: AddMarqueComponent },
    { path: "updateMarque/:id", component: AddMarqueComponent },
    { path: "produit", component: ListProduitComponent },
    { path: "addProduit", component: AddProduitComponent },
    { path: "updateProduit/:id", component: AddProduitComponent },
    {path:"statistique",component:StatistiqueComponent}

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };