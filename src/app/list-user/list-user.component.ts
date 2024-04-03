import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../service/excel.service';
import { UsersService } from '../service/users.service';
import { PdfService } from '../service/pdf.service';
import { Users } from '../model/users';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user :Users[] = [];
  constructor(
    public usersService: UsersService,
    private excelService: ExcelService,
    private pdfService: PdfService 
  ) { }

  

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.usersService.getAll().subscribe(
      (data)=>{
          this.user = data;
          console.log(this.user)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  

  deleteUser(id:any){

    Swal.fire({
      title: "Voulez-vous  vraiment supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {
     
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe(
          (data)=>{
              this.getAll();
              Swal.fire("Utilisateur supprimé avec succes", "", "success");
              console.log(data)
          },
          (error)=>{
            console.log(error);
          }
        )
      
      }
    });


  }

  exportToExcel(): void {
    if (this.user && this.user.length > 0) {
      this.excelService.exportToExcel(this.user, 'users');
    }
  }

  exportToPdf(): void {
    if (this.user && this.user.length > 0) {
      this.pdfService.generatePdf(this.user, 'users.pdf');
    }
  }

}
