import React,{useState} from 'react';
import './Chat.css';
import {MoreVert,SearchOutlined,AttachFile} from  '@material-ui/icons';
import {Avatar,IconButton} from  '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({messages}) {

    

    const [input, setInput] =  useState('')

    const sendMessage= async(e)=>{

        e.preventDefault();

         await axios.post('/messages/new', {

            message:input,
            name: "Carlos",
            timestamp: "17:02:2020:1754",
            received:"true"
        })

        setInput('');

    };


    return (
        <div className="chat">

            <div className="chat_header">

            <Avatar />

           

            <div className="chat_headerInfo">

                <h3>Room Name</h3>

                <p>The last seen at ...</p>

            </div>

            <div className="chat_headerRight">

                     <IconButton>

                    <SearchOutlined />

                    </IconButton>


                    <IconButton>


                    <AttachFile />

                    </IconButton>


                    <IconButton>

                    <MoreVert />

                    </IconButton>

                 </div>
        </div>


        <div className="chat_body">

            {messages.map((message)=>(

                <p className={`chat_message ${message.received && "chat_receiver" }`}>

                <span className="chat_name">{message.name}</span>

                {message.message}

                <span className="chat_timestamp">

                    {message.timestamp }

                </span>

                </p>
                    

            ))}

        </div>

        <div className="chat_footer">

        <InsertEmoticonIcon />

        <form>

            <input 
               
                value={input}
                placeholder="Type a message"
                type="text"
                onChange={(e)=>setInput(e.target.value)}
            />

            <button onClick={sendMessage} type="submit"> Send a message </button>

        </form>
        
        <MicIcon />
        
        </div>
     </div>
    )
}

export default Chat
