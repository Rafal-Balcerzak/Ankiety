
import React, { useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style/Ankiety.css";
import Popup from './NowaAnkieta/Popup.js';
import "./NowaAnkieta/Popup.css"

const AnkietyPytania = ({pytania, nazwaWybranejAnkiety, wybranaAnkieta, ip}) => {
   let i = 1;
   const [listaOdpowiedzi, setListaOdpowiedzi] = useState([]);
    const [popupCzyNapwenowyslijAnkiete, setPopupCzyNapwenowyslijAnkiete] = useState(false);
   const nazwaAnkiety = nazwaWybranejAnkiety;
   const zanzaczonaOdp = (e) =>{
       const ipv4 = ip;
       const pytanie = e.target.name;
       const trescOdpowiedzi = e.target.value;
       const kometarz = null;
       const newObject = {
        ipv4,
        nazwaAnkiety,
        pytanie,
        trescOdpowiedzi,
        kometarz
       }
    //    if (Array.isArray(listaOdpowiedzi)) {
                if(listaOdpowiedzi.find(element => element.pytanie == newObject.pytanie) == -1 ) {
                
                console.log(-1);
            }else{
                const index = listaOdpowiedzi.findIndex(element => element.pytanie == newObject.pytanie);
                
                listaOdpowiedzi.splice(index, index + 1);
                console.log(index)
            }
                setListaOdpowiedzi(listaOdpowiedzi.concat(newObject));
//    }
        }
    //    else {
    //        console.log("Błąd! nie jest tablicą!")
    //    }
       
      
    //    setListaOdpowiedzi(listaOdpowiedzi.concat(newObject));
    
    // console.log("Ilość itemów: "+listaOdpowiedzi.length);
    // console.log(listaOdpowiedzi);
    const zamknijPopup = () =>{
        setPopupCzyNapwenowyslijAnkiete(false);
    }
    const CzyNapwenowyslijAnkiete = () =>{
        setPopupCzyNapwenowyslijAnkiete(true);
    }
    const wyslijAnkiete = () =>{
        console.log(listaOdpowiedzi); 
        fetch('http://localhost:8080/odpowiedziOsob/listaOdpowiedzi', {
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(listaOdpowiedzi)
        })
            .then( resp =>  resp.json())
            .then( data => console.log(data))
    }
   return(
       <div >
           {/* Button tymczasowy? */}
           {/* <button onClick={wyslijJednaAnkiete}>zatwierdz</button> */}
       <h1>{nazwaWybranejAnkiety}</h1>{}
       <ul className="AnkietyKontener">
           {pytania.map(pytanie => 
               <li key={pytanie.idPytania} className="Pytanie">
                   <b className="Pytanie" >{i++}. {pytanie.pytanie}</b>
                   {pytanie.tresciOdpowiedzi.map(odpowiedzi =>
                    <Odpowiedz odpowiedz={odpowiedzi.trescOdpowiedzi} pytanie={pytanie.pytanie} zanzaczonaOdp={zanzaczonaOdp}/>
                   )}
                    <p>Komentarz(niewymagane):</p>
                    <textarea name="kometarz" className="formKometarz"></textarea>
               </li>
               )}
               { (wybranaAnkieta === "Brak") ? null :  
              
               <button type="submit" onClick={CzyNapwenowyslijAnkiete} className="btn btn-dark btn-lg" id="WyslijAnkietyBtn" >WYSLIJ</button>
               
               }
       </ul>
       <Popup trigger={popupCzyNapwenowyslijAnkiete} zamknijPopup={zamknijPopup}>
                <h3>Czy na pewno chcesz wysłać wyniki?</h3>
                <p>Sprawdz cyz wyniki są poprawnie wypełnione i czy odpowiedziałaś na wszystkie odpowiedzi.</p>
                <Link to="/WypelnionaAnkieta"><button onClick={wyslijAnkiete} className="btn btn-outline-success">TAK</button></Link>
                <button onClick={zamknijPopup} class="btn btn-outline-danger">Nie</button>
        </Popup>
       </div>
   );
}
const Odpowiedz = ({odpowiedz, zanzaczonaOdp, pytanie}) =>{

    
    return(
        <>
    <ul className="OdpowiedziKontaener">
            <li onChange={zanzaczonaOdp}>
                <input type="radio"  value={odpowiedz} defaultValue={odpowiedz} name={pytanie}/>{odpowiedz} 
            </li>
    </ul>
    </>
    )
}

export default AnkietyPytania;