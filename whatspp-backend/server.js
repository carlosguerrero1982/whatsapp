import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';

const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1085205',
    key: '17ad1317c79d34f57935',
    secret: '3b6cf53f97c9de1af100',
    cluster: 'eu',
    encrypted: true
  });


app.use(express.json());


const connection_url = 'mongodb+srv://admin:sobrino1@cluster0.brqvj.mongodb.net/whatsapp?retryWrites=true&w=majority'


mongoose.connect(connection_url, {

    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

});

const db = mongoose.connection

db.once('open', ()=>{

    console.log("DB CONNECTED");
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change)=>{

        console.log(change);

    });
});


app.get('/',(req,res)=>res.status(200).send("HELLO"));

app.post('/messages/new', (req,res)=>{

    const dbMessage = req.body

    Messages.create(dbMessage, (err,data)=>{

        if(err){

            res.status(500).send(err)

        } else{

            res.status(201).send(data)
        }

    });


});

app.get('/messages/sync', (req,res)=>{

    Messages.find((err, data) =>{

        if (err){
            res.status(500).send(err)
        }else {

            res.status(200).send(data)
        }

    });
});

app.listen(port,()=>console.log(`Running ${port}`));