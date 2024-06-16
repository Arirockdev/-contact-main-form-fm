import { sendMessagge } from "./models/send.js";

const btn = document.getElementById('btn');

function main (){
  
  btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    sendMessagge();
    
  })
  
  

}
main();







