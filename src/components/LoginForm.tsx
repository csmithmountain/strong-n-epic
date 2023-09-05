import React, { useState, useEffect } from 'react';

const LoginForm: React.FC = () => {

  
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        
        if(username === 'admin' && password === 'admin'){
          console.log('Yeah');
          
        } else {
          // alert('Invalid email or password')
        }
    }

    return(
        <div style={{ background: 'gray',padding: '1rem'}}>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <button type="button">
                    Register
                </button>
            </form>
        </div>
    )
}

export default LoginForm;