import React from 'react';
import './Chat.css';
import {MoreVert,SearchOutlined,AttachFile} from  '@material-ui/icons';
import {Avatar,IconButton} from  '@material-ui/core';



function Chat() {
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

            <p className="chat_message">

                <span className="chat_name">Carlos</span>

                This is a message

                <span className="chat_timestamp">

                    {new Date().toUTCString() }

                </span>

            </p>

            <p className="chat_message chat_receiver">

                <span className="chat_name">Carlos</span>

                This is a message

                <span className="chat_timestamp">

                    {new Date().toUTCString() }

                </span>

             </p>

             <p className="chat_message">

                <span className="chat_name">Carlos</span>

                This is a message

                <span className="chat_timestamp">

                    {new Date().toUTCString() }

                </span>

             </p>

        </div>
     </div>
    )
}

export default Chat
