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

        if (enviar.disabled){
            window.alert('Preencha todos os campos obrigatórios.')
        }else{
            window.location.href = 'main.html'
        }

    })

})
