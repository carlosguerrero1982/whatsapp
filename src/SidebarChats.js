import React from 'react';

import './SidebarChats.css';
import {Avatar,IconButton} from  '@material-ui/core';

function SidebarChats() {
    return (
        <div className="SidebarChat">

            <Avatar />

            <div className="SidebarChat_info">

                <h2>ROOM NAME</h2>
                <p>This is the last message</p>
                

            </div>

        </div>
    )
}

export default SidebarChats
