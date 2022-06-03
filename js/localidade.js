document.addEventListener('DOMContentLoaded', function() {

    pais = document.querySelector('.pais')
    cidade = document.querySelector('.cidade')
    enviar = document.querySelector('input[type="submit"]')

    enviar.addEventListener('click', function(e){

        if(pais.value!='' && cidade.value!=''){
            window.location.href = 'main.html'
        }
        e.preventDefault();
    })
})