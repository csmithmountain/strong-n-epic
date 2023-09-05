import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Login stuff mirage stuff
        console.log("wow")
        if(username === 'admin' && password === 'admin'){
          console.log('Yeah');
          
        } else {
          // alert('Invalid email or password')
        }
    }

    return(
        <div>
        <h2>login</h2>
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