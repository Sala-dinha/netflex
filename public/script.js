function alternaSenha(elmnt, img){
    let element = document.querySelector(elmnt);
    let image = document.querySelector(img);
    switch(element.getAttribute('type')){
        case 'password' : element.setAttribute('type', 'text'); image.setAttribute('src', './imagens/olho_fechado.png'); break;
        case 'text' : element.setAttribute('type', 'password'); image.setAttribute('src', './imagens/olho_abrido.png'); break;
    }
    
}

