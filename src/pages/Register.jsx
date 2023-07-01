import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
// for image storing wala feature
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// for firestore database
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false)
    
    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user collection on firestore 
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                          });  
                          
                        //creating userChats collection on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        // redirecting to homepage
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                });
            });
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">GuftGu</span>
                <span className="title">Sign up</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    {/* display is set to none and voh use hoga label se */}
                    <input required style={{ display: "none" }} type="file" id="file" />
                    {/* label for the above given input */}
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an image</span>
                    </label>
                    <button className=''>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register

