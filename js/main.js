// import { render } from "./models/render.js";
// import { changeRadioButton } from "./models/radio-buttons.js";
// import { selectInput, validar } from "./models/validate.js";
import { sendMessagge } from "./models/send.js";

const btn = document.getElementById('btn');

function main (){
  
  btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    // validar();
    
    // changeRadioButton();

    sendMessagge();
    
    // render();
  })
  
  // selectInput();
  

}
main();




//// Capturar los datos del form en un objeto cada usuario que se vaya agregando, ver si lo puedo hacer con oop ( esto es opcional porque se me ocurrio a mi para practicar oop )


//// para el tema de la captura de datos ver otra vez el video de carpi de local storage, pero ver tambien el video jp clase del todo list

//// ver de subir y ver si esto lo dejo para cuando termine lo de codo a codo




