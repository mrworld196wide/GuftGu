import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Message = () => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://images.unsplash.com/photo-1553610074-8c838fa2e56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80" alt="" />
                <span>Just Now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.unsplash.com/photo-1553610074-8c838fa2e56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80" alt="" />
            </div>
        </div>
    )
}

export default Message