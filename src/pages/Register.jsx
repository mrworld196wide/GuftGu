import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">GuftGu</span>
                <span className="title">Sign up</span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    {/* display is set to none and voh use hoga label se */}
                    <input style={{ display: "none" }} type="file" id='file' />
                    {/* label for the above given input */}
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an image</span>
                    </label>
                    <button className=''>Sign up</button>
                </form>
                <p>Already have an accoun? Login</p>
            </div>
        </div>
    )
}

export default Register