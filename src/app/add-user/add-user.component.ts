import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { NgForm } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  nom :string ="";
  prenom :string ="";
  age :number = 0;
  id = null;

  user : Users = new Users();
  constructor(public UsersService:UsersService,
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
      this.user.nom = this.nom;
      this.user.prenom = this.prenom;
      this.user.age = this.age;
      this.user.id = this.id;
      this.UsersService.updatUser(this.id,this.user).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/user')
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
          this.user.nom = this.nom;
          this.user.prenom = this.prenom;
          this.user.age = this.age;
      
          this.UsersService.addUser(this.user).subscribe(
            (data)=>{
                this.router.navigateByUrl('/user');
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
    this.UsersService.getById(id).subscribe(
      (data : Users)=>{
        console.log(data)
        this.nom = data.nom ?? "";
        this.prenom = data.prenom ?? "";
        this.age = data.age ?? 0;
      },
      (error) =>{

      }
    )
  }

}
