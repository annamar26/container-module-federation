import {  loginF } from "../fetch"
import { dispatchRoute, onNavigate } from "../routes"
import { Home } from "./home"

export const Login = ()=>{

const email = `<label for='email'>Correo electronico
<input type='email' id='email' required placeholder='example@malito.com'></label>
<label for='password'>Contraseña
<input type='password' id='password' required placeholder='password'></label>
<input type='submit' value='Iniciar sesión' id='submit'> `

const div = document.createElement('div')
div.innerHTML = email

document.getElementById('root').appendChild(div)

document.getElementById('submit').addEventListener('click', ()=>{


  console.log()
  
loginF({email: document.getElementById('email').value, password: document.getElementById('password').value})
document.getElementById('root').removeChild(div)
})

}


