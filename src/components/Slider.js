import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  // (1) Settiamo i primi state
  const [recensioni, setRecensioni] = useState(data);
  //Volendo, no è necessario definire lo state di recensioni perchè è un valore stabile che non viene mai alterata.
  //Non c'è bisogno che sia dentro uno state, ma si può definirlo come data necessità di chiamarlo 'recensioni'.

  // (4) Ho bisogno di un metedo per passare in maniera dinamica al componente, la classe
  //  giusta per la posizione che occupa all'interno del mio slider:
  //  inanzitutto creo uno 'state' che tenga traccia di quello che sarà necessario mutare
  //  quando l'utente vorrà premere i button 'prev' e 'next' per spostarsi all'interno delle recensioni:
  const [active, setActive] = useState(0);

  // (8) Function per passare alla prossima slide:
  const prossimaSlide = () => {
    setActive((prevValue) => {
      //(9) usiamo il function return per avere controllo su quello che succede premendo sul nostro button
      //in maniera tale da non andare mai fuori dal nostro array e superare il limite.
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };

  // (10) Function per passare alla slide precedente:
  const precedenteSlide = () => {
    setActive((prevValue) => {
      //(9) usiamo il function return per avere controllo su quello che succede premendo sul nostro button
      //in maniera tale da non andare mai fuori dal nostro array e superare il limite.
      if (prevValue - 1 < 0) {
        return recensioni.length - 1;
      }
      return prevValue - 1;
    });
  };

  //(11) Utilizzo uno useEffect per automatizzare l'avanzare dello slider:
  // useEffect(() => {
  //   setTimeout(() => {
  //     prossimaSlide();
  //   }, 5000);
  // }, [active]);

  //(12) ma appena clicchiamo i buttons lo slide inizierà ad avanzare velocemnte ed imppazire perchè avremo settato molti setTimeout,
  //e per risolvere questo problema usiamo una 'cleanUp function':
  useEffect(() => {
    const timer = setTimeout(() => {
      prossimaSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [active]);

  //(2) Faccio un return delle recensioni:
  return (
    <div className="container slider">
      {recensioni.map((recensione, index) => {
        let positionClass = "";

        if (index === active) {
          positionClass = "active";
          //(7) quando occupiamo la prima posizione '0' , non siamo coperti in nessuna maniera da vere un valore di 'prev', ma abbiamo solo 'next'.
          // Quindi per risolvere questa condizione mi basta aggiungere un 'OR' --> '|| (active === 0 && index === recensioni.length - 1)'.
        } else if (
          index + 1 === active ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          //(5) quando l'elemento 'active' occupa il valore di 1 significa che index al valore di 0 + 1 === 'active,
          //chi soddisfa queste condizioni è il primo slide e lui va a prendere la classe di 'prev':
          positionClass = "prev";
        } else {
          //(6) se nessuno di queste condizioni è verificata:
          positionClass = "next";
        }

        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}

      {/* (3) Posiziono tutto ciò che mi serve per completare il render e lo styling di questo componente: */}
      <div className="btn-group slider-btn-group">
        <button
          className="btn btn-slider prev-slider"
          onClick={precedenteSlide}
        >
          Prev
        </button>
        <button className="btn btn-slider next-slider" onClick={prossimaSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
