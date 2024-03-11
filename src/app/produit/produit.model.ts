
export class Produit {
  nom: string;
  image: string;
  prix: number;
  categorie: string;
  quantiteStock: number;
  quantiteMinCommande: number;

  constructor(nom: string, image: string, prix: number, categorie: string, quantiteStock: number, quantiteMinCommande: number) {
    this.nom = nom;
    this.image = image;
    this.prix = prix;
    this.categorie = categorie;
    this.quantiteStock = quantiteStock;
    this.quantiteMinCommande = quantiteMinCommande;
  }
}
