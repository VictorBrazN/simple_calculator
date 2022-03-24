
function calcular(tipo, valor){
    var campo = document.getElementById('resultado').value

    var ultimoInserido = [campo.substring(campo.length -1, campo.length)]

    if (tipo === 'acao' && ultimoInserido != '.' && ultimoInserido != '-' && ultimoInserido != '+' && ultimoInserido != '/' && ultimoInserido != '*'){   
        if (tipo === 'acao' && campo.length != 0){

            if(valor === '.'){
                document.getElementById('resultado').value += valor
            }
            
            if(valor === 'c'){
                document.getElementById('resultado').value = ''
            }

            if(valor === '-' || valor === '*' || valor === '/' || valor === '+' ){
                document.getElementById('resultado').value += valor
            }


            if(valor === '='){
                var valor_campo = eval(document.getElementById('resultado').value)
                document.getElementById('resultado').value = valor_campo
            }

        }
    }else if(tipo === 'valor'){
            document.getElementById('resultado').value += valor
            
        } 

}









