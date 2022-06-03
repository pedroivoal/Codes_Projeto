document.addEventListener('DOMContentLoaded', function() {

    pais = document.querySelector('.pais')
    cidade = document.querySelector('.cidade')
    enviar = document.querySelector('input[type="submit"]')

    enviar.addEventListener('click', function(e){

        if(pais.value!='' && cidade.value!=''){
            window.location.href = 'main.html'
        }else{
            label = document.querySelectorAll('label')
            label[0].style.color = 'red'
            label[1].style.color = 'red'
            
        }
        e.preventDefault();
    })
})