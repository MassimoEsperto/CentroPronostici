export class Utente {
  username: string;
  nome: string;
  cognome: string;
  email: string;
  ruolo: string;
  password: string;
  versato: number;
  schede: number;
  cellulare: string;

  constructor(
    username: string,
    nome: string,
    cognome: string,
    email: string,
    cellulare: string,
    ruolo: string,
    password: string,
    versato: number) { }
}
