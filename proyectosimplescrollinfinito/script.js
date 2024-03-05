const container = document.querySelector ('.container')

//?selecionar el contender de los divs

window.addEventListener('scroll', ()=> {
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
    //todo revisar de nuevo documentacion ytamb en la w3school de los 3 propiedades https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    
    scrollTop + clientHeight > scrollHeight - 2 && setTimeout(newContainer, 1000)
    //?se fijan parametros de las propiedades 
})


const newContainer = () => {
    const caja = document.createElement('div')
    caja.className = 'caja d'
    container.appendChild(caja)
}








