import React , {useState,useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const[messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/messages/sync')
    .then(response =>{

     
      setMessages(response.data);  
    })
    
  }, []);

  console.log(messages);


  useEffect(() => {

    const pusher = new Pusher('17ad1317c79d34f57935', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
      setMessages([...messages,data]);

    });
    
    return ()=>{

      channel.unsubscribe();
      channel.unbind_all();
    };
  
  }, [messages]);



  return (
    <div className="app">
     
         <div className="app_body">   

           < Sidebar />

           <Chat />

        </div>

    </div>
      
  );
}

export default App;
