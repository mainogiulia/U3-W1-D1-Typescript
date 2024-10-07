interface Cellphone {
  credito: number;
  numeroChiamate: number;

  ricarica(ammontare: number): void;
  chiamata(minutiPassati: number): void;
  get chiamata404(): number;
  get getNumeroChiamata(): number;
  azzeraChiamate(): void;
}

class User implements Cellphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }
  ricarica(ammontare: number): void {
    this.credito += ammontare;
  }
  chiamata(minutiPassati: number): void {
    this.credito -= minutiPassati * 0.2;
    this.numeroChiamate += 1;
  }
  get chiamata404(): number {
    return this.credito;
  }
  get getNumeroChiamata(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const randomUser = new User("Giulia", "Maino");
randomUser.ricarica(20);
randomUser.chiamata(2);
console.log(randomUser.chiamata404);
randomUser.ricarica(10);
randomUser.chiamata(5);
console.log(randomUser.chiamata404);
console.log(randomUser.getNumeroChiamata);
randomUser.azzeraChiamate();
