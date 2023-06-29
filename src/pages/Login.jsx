import React from 'react'
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">GuftGu</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button className=''>Sign in</button>
                </form>
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    )
}

export default Login