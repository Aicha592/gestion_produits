import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoachComponent } from './list-coach/list-coach.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddCoachComponent } from './add-coach/add-coach.component';

const routes: Routes = [
  {path:"",redirectTo:'equipe',pathMatch:'full'},
  {path:"coach",component:ListCoachComponent},
  {path:"addCoach",component:AddCoachComponent},
  {path:"equipe",component:ListEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
