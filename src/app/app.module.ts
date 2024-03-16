import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListCoachComponent } from './list-coach/list-coach.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { EquipePipe } from './pipe/equipe.pipe';
import { CoachPipe } from './pipe/coach.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    ListCoachComponent,
    AddCoachComponent,
    EquipePipe,
    CoachPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
