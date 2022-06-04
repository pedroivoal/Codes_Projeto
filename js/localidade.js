document.addEventListener('DOMContentLoaded', function() {

    pais = document.querySelector('.pais')
    cidade = document.querySelector('.cidade')
    enviar = document.querySelector('input[type="submit"]')



    enviar.addEventListener('click', function(e){

        if(pais.value!='' && cidade.value!=''){
            window.location.href = 'main.html'
        }else{
            label = document.querySelectorAll('label')
            janela = document.querySelectorAll('.janela')
            aparece()
            setTimeout(desaparece, 3000)
        }
        e.preventDefault();
    })
})

function aparece(){
    label[0].classList.add('red')
    label[1].classList.add('red')
    janela[0].classList.add('tra0')
    janela[1].classList.add('tra1')
}

function desaparece(){
    label[0].classList.remove('red')
    label[1].classList.remove('red')
    janela[0].classList.remove('tra0')
    janela[1].classList.remove('tra1')
}