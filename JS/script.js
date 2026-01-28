// Criando botão para calcular as AOLS e obter o resultado
    const btnAv1 = document.querySelector('#btnAv1')
    btnAv1.addEventListener('click', aolResult)


// Função para obter o resultado da AOL
function aolResult() {

// Entrada de dados das AOLS
    let aol1Input = document.querySelector('#aol1-input')
    let aol2Input = document.querySelector('#aol2-input')
    let aol3Input = document.querySelector('#aol3-input') 
    let aol4Input = document.querySelector('#aol4-input')
    let msgAv1 = document.querySelector('#msgAv1')
    msgAv1.textContent = ''

// validação de dados
    if(aol1Input.value.trim() == ''|| aol2Input.value.trim() == '' || aol3Input.value.trim() == '' || aol4Input.value.trim() == '') {
        msgAv1.textContent = 'preencher todos os campos antes de finalizar.'
        msgAv1.style.color = 'darkred' // Verificar espaços vazios
        return
    } else {
        msgAv1.style.color = '#a29bfe'
    }

// Covertendo valores das AOLS para números
    let aol1 = Number(aol1Input.value)
    let aol2 = Number(aol2Input.value)
    let aol3 = Number(aol3Input.value)
    let aol4 = Number(aol4Input.value)
    if(aol1 > 10 || aol1 < 0 || aol2 > 10 || aol2 < 0 || aol3 > 10 || aol3 < 0 || aol4 > 10 || aol4 < 0) {
        msgAv1.textContent = 'As notas devem estar entre 0 e 10.'
         msgAv1.style.color = 'darkred'
        return
    } else {
        msgAv1.style.color = '#a29bfe'
    }

    let mediaAOL = (aol1 + aol2 + aol3 + aol4) / 4 * 0.4
    msgAv1.textContent = `Sua nota da AOL que vale 40% da nota final é ${mediaAOL.toFixed(2)}`
    return mediaAOL;
}

// Criando botão para calcular a AV2 e obter o resultado
    const btnAv2 = document.querySelector('#btnAv2')
    btnAv2.addEventListener('click', AV2result)

// Função para obter o resultado da AV2
    function AV2result() {
       let multiplaInput = document.querySelector('#multiplaInput')
       let Objetivainput = document.querySelector('#Objetivainput')
       let msgAv2 = document.querySelector('#msgAv2')
       msgAv2.textContent = ''

       if(multiplaInput.value.trim() == '' || Objetivainput.value.trim() == '') {
        msgAv2.textContent = 'preencher todos os campos antes de finalizar.'
        msgAv2.style.color = 'darkred'
        return
       } else {
        msgAv2.style.color = '#a29bfe'
       }

       let multipla = Number(multiplaInput.value)
       let Objetiva = Number(Objetivainput.value)

       if(multipla > 6 || multipla < 0 ||
        Objetiva > 4 || Objetiva < 0) {
        msgAv2.textContent = "A nota de múltipla escolha deve ser entre 0 e 6, enquanto a objetiva deve ser entre 0 e 4."
         msgAv2.style.color = 'darkred'
        } else {
            msgAv2.style.color = '#a29bfe'
        }

        let AV2nota = multipla + Objetiva
        let MediaAV2 = (multipla + Objetiva) * 0.6
        let mediaGeral = MediaAV2 + aolResult()
        let status = mediaGeral >= 7 ? "APROVADO, parabéns." : "REPROVADO, leia as instruções para realizar a prova final."

        if(mediaGeral >= 7) {
            msgAv2.style.color = 'darkgreen'
        } else {
            msgAv2.style.color = 'darkred'
        }
        msgAv2.textContent = `Sua nota da AV2 é ${AV2nota.toFixed(2)} que vale 60% da nota final com média de ${mediaGeral.toFixed(2)} ${status}`
        return mediaGeral;
    }

// Criando botão para calcular o resultado da final
    const btnAf = document.querySelector('#btnAf')
    btnAf.addEventListener('click', AfResult)

    function AfResult() {
        let afInput = document.querySelector('#afInput')
        let Af = Number(afInput.value)
        let msgAf = document.querySelector('#msgAf')
        if(AV2result() < 4) {
            msgAf.textContent = 'Você não possui nota suficiente para realizar a final.'
            msgAf.style.color = 'darkred'
            return
        } else {
            msgAf.style.color = 'darkgreen'
        }

        let resultadoFinal = (AV2result() + Af) / 2
        let statusFinal = resultadoFinal >= 5 ?"APROVADO, parabéns" :"REPROVADO"

        if(resultadoFinal >= 5) {
            msgAf.style.color = 'darkgreen'
        } else {
            msgAf.style.color = 'darkred'
        }
        msgAf.textContent = `Sua nota da avaliação final é ${resultadoFinal.toFixed(2)} ${statusFinal}.`
    }