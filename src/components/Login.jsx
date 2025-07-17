import { React, useState } from 'react'
import '../login.css'
import usuarios from './Usuarios.js'

const login = () => {
  const [user, setUsers] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(false)

  const onLogin = (e) => {
    e.preventDefault();
    const foundUser = usuarios.filter(item => item.user===user)[0]
    if(foundUser){
      if(foundUser.password===password){
        return activarUsuario(foundUser)
      }
    }
    loginIncorrecto()
  }

  const loginIncorrecto = () => {
    setLogin(true)

    const mensajeAviso = setTimeout(()=> {
      setLogin(false)
    }, 2000)
  }

  const activarUsuario = (foundUser) => {
    localStorage.setItem(user, JSON.stringify(foundUser))
  }

  return (
    <form onSubmit={onLogin} >
      <div>
        <div className='login'>
        <h1>LOGIN:</h1>
          <label htmlFor="">Usuario:</label>
          <div>
            <input type="text" name="" placeholder='Ingresar el usuario' onChange={(e) => setUsers(e.target.value)} />
          </div>
          <label htmlFor="">Contraseña:</label>
          <div>
            <input type="password" name="" placeholder='Ingresar la contraseña' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input type="submit" value="Aceptar" />
            <input type="button" value="Volver" />
          </div>
            {login && (<h3 className='logininvalido'>¡Datos incorrectos, verificar!</h3>)}
        </div>
      </div>
    </form>
  )
}

export default login