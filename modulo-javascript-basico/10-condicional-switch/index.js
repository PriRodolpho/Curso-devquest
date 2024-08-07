let aulaKungFu = 'capoeira'

switch(aulaKungFu){
    case 'segunda':
    case 'quarta':
    case 'sexta':
    case 'domingo':
        console.log('Não tem aula de Kung Fu')
        break
    case 'terça':
    case 'quinta':
    case 'sábado':
        console.log('Tem aula de Kung Fu')
        break
    default:
        console.log('Valor inválido')
}