import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generatePdf(data: any[], fileName: string): void {
    const doc = new jsPDF.default();

    doc.text('Liste des utilisateurs', 10, 10);

    let row = 20;
    data.forEach(item => {
      doc.text(`${item.nom}, ${item.prenom}, ${item.age}`, 10, row);
      row += 10;
    });

    doc.save(fileName);
  }
}