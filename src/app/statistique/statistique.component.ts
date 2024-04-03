import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ProduitsService } from '../service/produits.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  ctx: CanvasRenderingContext2D | null = null;
  chart: any = null;
  chartBar: any = null;
  marques: string[] = [];
  categories: string[] = [];
  nombreProduitsParMarque: number[] = [];
  nombreProduitsParCategorie: number[] = [];
  dataLoaded: boolean = false;

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getNombreProduitsParMarque();
    this.getNombreProduitsParCategorie();
  }

  getNombreProduitsParMarque(): void {
    this.produitsService.getNombreProduitsParMarque().subscribe(
      (data: any[]) => {
        this.marques = data.map(item => item.marque);
        this.nombreProduitsParMarque = data.map(item => item.count);
        this.dataLoaded = true;
        this.createChartIfDataLoaded();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
 

  createChartIfDataLoaded(): void {
    if (this.dataLoaded) {
      this.createChart();
    }
  }

  createChart(): void {
    const canvas = document.getElementById('chart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('Erreur');
      return;
    }

    this.ctx = canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Erreur');
      return;
    }

    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: this.marques,
        datasets: [{
          label: '',
          data: this.nombreProduitsParMarque,
          backgroundColor: [
           
            'rgba(153, 102, 255, 0.5)',    
            'rgba(169, 169, 169, 0.5)',
            'rgba(128, 0, 0, 0.5)',
           
           
            
          ],
          borderColor: [
            'rgba(153, 102, 255, 0.5)',    
            'rgba(169, 169, 169, 0.5)',
            'rgba(128, 0, 0, 0.5)',
           
          ],
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
        
      }
    });
  }
  getNombreProduitsParCategorie(): void {
    this.produitsService.getNombreProduitsParCategorie().subscribe(
      (data: any[]) => {
        
        const uniqueCategories = [...new Set(data.map(item => item.categorie))];
        this.categories = uniqueCategories;
        
        
        this.nombreProduitsParCategorie = uniqueCategories.map(category => {
          const categoryData = data.find(item => item.categorie === category);
          return categoryData ? categoryData.count : 0;
        });
  
        this.dataLoaded = true;
        this.createChartBarIfDataLoaded();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  createChartBarIfDataLoaded(): void {
    if (this.dataLoaded) {
      this.createBarChart();
    }
  }
  createBarChart(): void {
    const canvas = document.getElementById('barChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('Erreur');
      return;
    }
  
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Erreur');
      return;
    }
  
    this.chartBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.categories, 
        datasets: [{
          label: '', 
          data: this.nombreProduitsParCategorie, 
          backgroundColor: [
            'rgba(153, 102, 255, 0.5)',    
            'rgba(169, 169, 169, 0.5)',
            'rgba(128, 0, 0, 0.5)',
            
          ],
          borderColor: [
          
            'rgba(169, 169, 169, 0.5)',
            'rgba(128, 0, 0, 0.5)',
            'rgba(153, 102, 255, 0.5)', 
           
          ],
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
      }
    });
  }
  
}
