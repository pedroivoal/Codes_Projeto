document.addEventListener('DOMContentLoaded', function() {

    h3 = document.querySelectorAll('h3')
    data = new Date().toLocaleString();
    dataC = ''
    for (i=0; i<=4; i++){
        dataC += data[i]
    }
    dataC += ' - '
    for (i=12; i<=16; i++){
        dataC += data[i]
    }
    for(hora of h3){
        hora.innerHTML = dataC
    }

    submit = document.querySelector('input[type="submit"]')
    submit.addEventListener('click', function(event){

        input = document.querySelector('input[type="text"]')
        event.preventDefault()
        if(input.value!=''){
            addMsg()
        }
        inp = input.value.trim().toLowerCase()
        if (resposta[inp]!=undefined){
            setTimeout(addWanser, 2000)
        } //else if (inp.split()[0])

    input.value = ''

    })

})

function addMsg(){

    section = document.createElement('section')
    section.classList.add('msg-usuario')

    divT = document.createElement('div')
    divT.classList.add('msg-titulo')

    h2 = document.createElement('h2')
    h2.innerHTML = 'Você'
    h2.style.fontWeight = 'bold'

    h3 = document.createElement('h3')
    data = new Date().toLocaleString();
    for (i=0; i<=4; i++){
        h3.innerHTML += data[i]
    }
    h3.innerHTML += ' - '
    for (i=12; i<=16; i++){
        h3.innerHTML += data[i]
    }
    
    divBolha = document.createElement('div')
    divBolha.classList.add('bolha-usuario')

    p = document.createElement('p')
    c = ''
    for (i=0; i<input.value.length; i++){
        c += input.value[i]
        if (c.length%13 == 0){
            c += '\n'
        }
    }
    p.innerHTML = input.value

    
    divT.appendChild(h2)
    divT.appendChild(h3)
    section.appendChild(divT)

    divBolha.appendChild(p)
    section.appendChild(divBolha)    

    main = document.querySelector('main')
    main.appendChild(section)
    
}

function addWanser(){

    section = document.createElement('section')
    section.classList.add('msg-resposta')

    divT = document.createElement('div')
    divT.classList.add('msg-titulo-invertido')

    h2 = document.createElement('h2')
    h2.innerHTML = 'Ana'
    h2.style.fontWeight = 'bold'

    h3 = document.createElement('h3')
    data = new Date().toLocaleString();
    for (i=0; i<=4; i++){
        h3.innerHTML += data[i]
    }
    h3.innerHTML += ' - '
    for (i=12; i<=16; i++){
        h3.innerHTML += data[i]
    }
    
    divBolha = document.createElement('div')
    divBolha.classList.add('bolha-resposta')

    p = document.createElement('p')
    p.innerHTML = resposta[inp]

    divT.appendChild(h2)
    divT.appendChild(h3)
    section.appendChild(divT)

    divBolha.appendChild(p)
    section.appendChild(divBolha)

    main = document.querySelector('main')
    main.appendChild(section)

}

resposta = {
    'oi': 'Olá, bom dia',
    'oi, bom dia': 'Olá, bom dia',
    'ola': 'Olá, bom dia',
    'tudo bem?': 'Tudo sim. Espero que com você também. Você tem interresse em alugar o ap?',
    'obrigado': 'Nada, tenha um bom dia',
    'tchau': 'Tchau, foi um prazer 😊',
}