
// Tipo global
let mensagemGlobal = 'Plim, plim'

console.log(mensagemGlobal);

// // Tipo bloco

// confirm('toc, toc')

// if(true){
//     const primeiraMensagem = 'Olá'
//     console.log(primeiraMensagem);    
// }
//     console.log(primeiraMensagem);
//     console.log(mensagemGlobal)
    
// // Tipo autônomo

// {
//     let segundaMensagem = 'turupom?'
//     console.log(segundaMensagem);
//     console.log(mensagemGlobal)    
// }
//     console.log(segundaMensagem);

// Tipo função
    
    function tipoEscopo(){
        const terceiraMensagem = 'Pode entrar'
        console.log(terceiraMensagem);
        console.log(mensagemGlobal)
        function outroEscopo(){
            let quartaMensagem = 'Quer chá?'
            console.log(quartaMensagem)
            console.log(mensagemGlobal)        
        }
        outroEscopo()      
    }
        tipoEscopo()
        outroEscopo()
        console.log(quartaMensagem)    
        console.log(terceiraMensagem)

        

