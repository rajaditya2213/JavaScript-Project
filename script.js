//Now Functionality

const container=document.getElementById('container');
const left=document.getElementById('left');
const right=document.getElementById('right');

const useremail=document.getElementById('user-email');
const invalidEmail=document.getElementById('invalid-email');
const emailInput=document.getElementById('email');
const submit=document.getElementById('submit-btn');

const confirmedMessage=document.getElementById('confirmed-message');
const dismissMessage=document.getElementById('dismiss-message');


function formSuccess(){
     confirmedMessage.classList.add('active');
     container.classList.add('success');
     left.style.display='none';
     right.style.display='none';

}

function validateEmail(email){
     const pattern=/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
     return pattern.test(email);
}

submit.addEventListener('click', (e)=>{
     e.preventDefault()
     const email=emailInput.value.trim()
     
     if(validateEmail(email)){
          formSuccess()
          useremail.innerText=email;
          emailInput.value=''

          invalidEmail.classList.remove('active')
          emailInput.classList.remove('active')
     }else{
          invalidEmail.classList.add('active')
          emailInput.classList.add('active')
     }
})

dismissMessage.add('click',()=>{
     left.style.display='block';
     right.style.display='block';
     container.classList.remove('success');
     confirmedMessage.classList.remove('active');
})
