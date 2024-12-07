export interface Compte {
  id: string;
  solde: number;
  dateCreation: string;
  type: 'COURANT' | 'EPARGNE';
}
