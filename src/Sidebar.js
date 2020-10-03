import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from  '@material-ui/core';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">

                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

                <div className="sidebar_headerRight">

                <IconButton>

                <DonutLargeIcon />

                </IconButton>


                <IconButton>

                <ChatIcon />

                </IconButton>


                <IconButton>

                <MoreVertIcon />

                </IconButton>


                </div>

            </div>

            <div className="sidebar_search">

                <div className="sidebar_searchContainer">

                    <SearchOutlined />

                    <input placeholder="Search o start new chat" type="text" />

                </div>


            </div>


            
        </div>
    )
}

export default Sidebar
