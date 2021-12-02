//(1) Importo le stelle icone:
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
//(2) Poi nel terminale installo 'react-icons' (npm install react-icons).

//(3) creo la nostra function:
const startCreator = (num) => {
  //(4) con questa funzione quello che dobbiamo fare è returnare un 'array' e questo risultato si ottiene con il metodo
  //return Array.from che permette di creare un array a partire da altri variabili, parametri e callback function.
  //Come primo parametro prenderà un oggetto di cui avremo una chiave associato ad un valore di tipo length '{length: 5}',
  //e come secondo paramentro una callback function in a sua volta avrà come primo parametro un underscore '_' che non è importante e
  //rappresenta il singolo elemento; e come secondo paramentro c'è 'index' che rapprensenta l'indice all'interno del nostro futuro array.
  return Array.from({ length: 5 }, (_, index) => {
    //(5) ora pongo una serie di 'if statement' per returnare in maniera corretta le nostre stelle o piene, a metà o vuote.
    if (num >= index + 1) {
      //Se il valore del numero è maggiore a 1, allora returna una stella piena:
      return <BsStarFill key={index} className="star" fill="#fca903" />;
    } else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className="star" fill="#fca903" />;
    } else {
      return <BsStar key={index} className="star" fill="#fca903" />;
    }
  });
};

export default startCreator; //Lo esporto per importarlo nel file 'Slide.js'
