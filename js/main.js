/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while */

//creo un array

const Spesa = [
  "mela",
  "pera",
  "kiwi",
  "insalata",
  "cipolle",
  "zucchine",
  "pasta",
  "pollo",
  "pesce-spada",
  "cavallo",
  "merluzzo",
  "riso",
  "cereali",
];

//creo una variabile contenitore

const Box = document.getElementById("lista-spesa");


// variabile  per indice
let i = 0;

//ciclo while

while ( i < Spesa.length) {  
    // variabile elementi lista
   let item = Spesa[i];

    console.log(Spesa[i]);

    //Inserisco in box questo pezzo di html
     Box.innerHTML+=`<li>${item}</li>`; 
     //incremento i di 1 ad ogni ciclo
    i++; 
}

