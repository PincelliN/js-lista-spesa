/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while */

//creo un array

const Spesa = [
  "mela",
  "pera",
  "Frutta-secca",
  "insalata",
  "Burro",
  "zucchine",
  "pasta",
  "pollo",
  "pesce-spada",
  "cavallo",
  "merluzzo",
  "riso",
  "olio",
];

//var carbo ,grassi e proteine

const Carbo = [
  "mela",
  "pera",
  "kiwi",
  "insalata",
  "riso",
  "pasta",
  "cipolle",
  "zucchine",
];
const Proteine = ["pollo", "pesce-spada", "cavallo", "merluzzo"];

const Grassi = ["olio", "Burro", "Frutta-secca"];

//creo una variabile contenitore

const Box = document.getElementById("lista-spesa");

const BoxCarbo = document.getElementById("lista-carbo");
const BoxProteine = document.getElementById("lista-proteine");
const BoxGrassi = document.getElementById("lista-grassi");

// variabile  per indice
let i = 0;

//ciclo while

while (i < Spesa.length) {
  // variabile elementi lista
  let item = Spesa[i];

    console.log(item);
// provo lo switch




if (Carbo.includes(item)) {
    BoxCarbo.innerHTML += `<li>${item}</li>`;
} else if (Proteine.includes(item)) {
    BoxProteine.innerHTML += `<li>${item}</li>`;
}else if (Grassi.includes(item)) {
    BoxGrassi.innerHTML += `<li>${item}</li>`;
} 
        //Inserisco in box questo pezzo di html
         Box.innerHTML += `<li>${item}</li>`;
        //incremento i di 1 ad ogni ciclo
       




 

  
  i++;
}
