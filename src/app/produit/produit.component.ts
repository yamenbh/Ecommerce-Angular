import { Component } from '@angular/core';
import { Produit } from './produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  listeProduits: Produit[];
  produitsFiltres: Produit[];
  panier: Map<Produit, number> = new Map();
  quantites: { [key: string]: number } = {};

  constructor() {
    // Créez des instances de Produit avec les détails
    const produit1 = new Produit('MSi502', 'https://storage-asset.msi.com/global/picture/news/2019/nb/Laptops101-20190920-1.png', 10.99, 'Categorie1', 200, 10);
    const produit2 = new Produit('MSI702', 'https://storage-asset.msi.com/global/picture/news/2019/nb/Laptops101-20190920-1.png', 19.99, 'Categorie2', 100, 20);
    const produit3 = new Produit('MSI802', 'https://storage-asset.msi.com/global/picture/news/2019/nb/Laptops101-20190920-1.png', 20.99, 'Categorie3', 50, 30);


    // Stockez ces produits dans le tableau
    this.listeProduits = [produit1, produit2, produit3];
    this.produitsFiltres = this.listeProduits.slice(); // Copier la liste initiale

  }
    // Méthode pour trier par prix (ascendant)
    trierParPrixAscendant(): void {
      this.produitsFiltres = this.produitsFiltres.sort((a, b) => a.prix - b.prix);
    }

    // Méthode pour trier par prix (descendant)
    trierParPrixDescendant(): void {
      this.produitsFiltres = this.produitsFiltres.sort((a, b) => b.prix - a.prix);
    }

    // Méthode pour filtrer par catégorie
    filtrerParCategorie(categorie: string): void {
      this.produitsFiltres = this.listeProduits.filter(produit => produit.categorie === categorie);
    }

    // Méthode pour réinitialiser les filtres
    reinitialiserFiltres(): void {
      this.produitsFiltres = this.listeProduits.slice(); // Restaurer la liste initiale
    }

// produit.component.ts

    ajouterAuPanier(produit: Produit): void {
      const quantite = this.quantites[produit.nom] || 0; // Get the quantity, default to 0

      if (quantite >= produit.quantiteMinCommande) {
        if (this.panier.has(produit)) {
          this.panier.set(produit, this.panier.get(produit)! + quantite);
        } else {
          this.panier.set(produit, quantite);
        }
      } else {
        // Affichez un message d'erreur ou faites quelque chose d'autre pour indiquer que la quantité est inférieure à la quantité minimale
        console.error(`La quantité minimale pour ${produit.nom} est ${produit.quantiteMinCommande}`);
      }
    }

    controlerQuantite(nomProduit: string, event: any): void {
      this.quantites[nomProduit] = Math.max(0, event.target.value || 0);
    }



}
