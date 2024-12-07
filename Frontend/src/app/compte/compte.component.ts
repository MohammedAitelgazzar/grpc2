import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CompteComponent implements OnInit {
  comptes: Compte[] = [
    { 
      id: 'CPT001', 
      type: 'COURANT', 
      solde: 1500.50, 
      dateCreation: '2024-03-20' 
    },
    { 
      id: 'CPT002', 
      type: 'EPARGNE', 
      solde: 25000.75, 
      dateCreation: '2024-03-19' 
    },
    { 
      id: 'CPT003', 
      type: 'COURANT', 
      solde: 3750.25, 
      dateCreation: '2024-03-18' 
    },
    { 
      id: 'CPT004', 
      type: 'EPARGNE', 
      solde: 12000.00, 
      dateCreation: '2024-03-17' 
    },
    { 
      id: 'CPT005', 
      type: 'COURANT', 
      solde: 850.30, 
      dateCreation: '2024-03-16' 
    },
    { 
      id: 'CPT006', 
      type: 'EPARGNE', 
      solde: 45000.00, 
      dateCreation: '2024-03-15' 
    }
  ];

  filteredComptes: Compte[] = [];
  selectedType: string = '';
  isFormVisible: boolean = false;

  newCompte: Compte = {
    id: '',
    type: 'COURANT',
    solde: 0,
    dateCreation: new Date().toISOString().split('T')[0]
  };

  constructor() { }

  ngOnInit(): void {
    this.filteredComptes = [...this.comptes];
  }

  filterComptes(): void {
    if (!this.selectedType) {
      this.filteredComptes = [...this.comptes];
    } else {
      this.filteredComptes = this.comptes.filter(compte => 
        compte.type === this.selectedType
      );
    }
  }

  showForm(): void {
    this.isFormVisible = true;
  }

  hideForm(): void {
    this.isFormVisible = false;
    this.resetForm();
  }

  resetForm(): void {
    this.newCompte = {
      id: '',
      type: 'COURANT',
      solde: 0,
      dateCreation: new Date().toISOString().split('T')[0]
    };
  }

  onSubmit(): void {
    if (this.newCompte.id && this.newCompte.type) {
      this.comptes.push({...this.newCompte});
      this.filterComptes(); // Mettre à jour la liste filtrée
      this.hideForm();
      alert('Compte créé avec succès !');
    }
  }

  formatMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(montant);
  }
}
