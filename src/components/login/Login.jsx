import { FaLock, FaUser } from "react-icons/fa"

import { useState } from "react"

import "./Login.css"


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log("test", username,password);
      console.log("Envio");
    };
        

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
            <div>
                <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon"/>
            </div>
            <div>
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon" />
            </div>
            <div className="recall-forget">
              <label >
                <input type="checkbox"/>
                Lembre de mim
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            
            <div>
                <button>
                   Entrar
                </button>
            </div>
            <div className="signup-link">
              <p>Não tem conta? <a href="#">Registre-se</a></p>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login


