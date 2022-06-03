document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelector('.pais')
    email = document.querySelector('.cidade')
    enviar = document.querySelector('input[type="submit"]')

    enviar.disabled = true;

    function update() {

        if (nome.value == '' || email.value == ''){
            enviar.disabled = true;
        } else {
            enviar.disabled = false;
        }

    }

    nome.addEventListener('input', function() {
        update()
    })

    email.addEventListener('input', function() {
        update()
    })

    enviar.addEventListener('click', function(e){

        e.preventDefault();
        window.location.href = 'main.html'
    })

    p = document.querySelector('.sub')
    p.addEventListener('click', function(e){
        e.preventDefault()
        window.alert('Preencha todos os campos obrigatórios.')
        
    })

})