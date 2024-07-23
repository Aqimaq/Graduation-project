function emailJsInit(){
  emailjs.init({
    publicKey: 'gLe8SV_OfnokkpESj',
    blockHeadless: true,
  });
}

function emailJsSend(templateParams){
  emailjs.send('service_fld1mkg', 'template_b5fvk09', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}
document.querySelector('form').addEventListener('submit', function(event){

  let form = {
    name: event.target.querySelector('input[name="name"]').value,
    email: event.target.querySelector('input[name="email"]').value,
    message: event.target.querySelector('input[name="message"]').value
  }
  

  emailJsInit()
  emailJsSend(form)
  
  alert('Сообщение отпралено')
})