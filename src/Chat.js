import React from 'react';
import './Chat.css';
import {MoreVert,SearchOutlined,AttachFile} from  '@material-ui/icons';
import {Avatar,IconButton} from  '@material-ui/core';



function Chat() {
    return (
        <div className="chat">

            <div className="chat_header">

            <Avatar />

            </div>

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
    )
}

export default Chat
