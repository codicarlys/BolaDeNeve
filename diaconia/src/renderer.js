document.addEventListener('DOMContentLoaded',function() {
    let btnContinuar = document.querySelector('button');
    btnContinuar.addEventListener('click', ()=> {
        let selected = document.querySelector('input[type="radio"]:checked');
        let opcaoEscolhida = selected.value;
        
        if (opcaoEscolhida !== '' ){
            let grupoSelecionado = configFile[opcaoEscolhida]
        }
    });
    
})
