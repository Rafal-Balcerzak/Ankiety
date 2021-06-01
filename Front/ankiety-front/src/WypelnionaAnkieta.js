import React, { Component } from 'react';
import image from "./img/send_answers_survey.jpg";

class WypelnionaAnkieta extends Component {
    render() {
        return (
            <div>
            <br></br>
            <h3>Odpowiedzi zostały wysłane!</h3>
            <img src={image} height="330px" alt="Ankiety obrazek" className="vibrate-1"></img><br></br><br></br>
            Dziękujemy za wypłenienie ankiety. Wróć na strone główną, dodaj nową ankietę lub dodaj kolejne pytania do swojej ankiety.<br></br>
           <br></br>
            </div>
        );
    }
}

export default WypelnionaAnkieta;