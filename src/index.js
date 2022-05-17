console.log('hola')


const target = document.getElementById('root')
const renderer = import('modal/Renderer')
// const promise = new Promise((resolve,reject)=>{
//     resolve(import('modal/Renderer'))})

    renderer.then(res=> res.renderInVanilla(target))