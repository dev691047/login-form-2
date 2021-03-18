const one=document.querySelector('.one');
const two=document.querySelector('.two');
let email=document.querySelector('#gmail')
const submit=document.querySelector('#submit');
let password=document.querySelector('#password');

function refreshPage(){
    alert("submitted");
    window.location.reload();
} 
submit.addEventListener('click',function(e){
          e.preventDefault();
    
     if(email.value==''){
         one.innerHTML="username cannot be empty";
     }
     
     if(password.value==""){
         two.innerHTML="password cannot be empty";
     }
     if(password.value.length>0 && password.value.length<5)
     {
         two.innerHTML="must be between 5-10 characters"
     }
     if(password.value.length>10)
     {
         two.innerHTML="must be between 5-10 characters"
     }
     if(password.value!='' && gmail.value!='' && password.value.length>5 && password.value.length<10){
       
         refreshPage();
     }

})