import React from 'react';
import './navbaar.css';
import { useState } from 'react';
function Counterr() {
    const [result, setResult] = useState('');
    const [username, setUser] = useState('');
    const [passward, setPass] = useState('');
    const [repassward,setRepas] = useState('');
    const [error,setError] = useState(false)
    const [fear,setFear] = useState(false)
    function submitResult(){
        
            setResult({username,passward,repassward})
    }
        
       

    function submitUser(e){
        setUser(e.target.value)
    }
    function submitPassword(e){
        setPass(e.target.value)
    }
    return (
        <div>
            
            <nav className="navbar">
            <div className="signup-container">
                <h2>Login</h2>
                    <input type="text" name="username" placeholder="Username" onChange={submitUser} />
                    <input type="password" name="password" placeholder="Password" onChange={submitPassword} />
                    
                    
                       
                    <button onClick={submitResult} type="submit">Login</button>
                    
            
            </div>
        </nav>
        </div>
    );
}

export default Counterr;