const btn = document.getElementById('btn');
const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputEnquiry = document.getElementById('enquiry');
const inputRequest = document.getElementById('request');
const inputTextArea = document.getElementById('text-area');
const inputCheckbox = document.getElementById('check-box');
const form = document.querySelector('form');



export function render (){
  inputFirstName.value = '';
  inputLastName.value = '';
  inputEmail.value = '';
  inputEnquiry.value = false;
  inputRequest.value = false;
  inputTextArea.value = '';
  inputCheckbox.checked = false;
}