import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bot, Chat, Chatbox } from './composants/chat/chat';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Bot/> */}
    <Chat/>
    
  </React.StrictMode>
);



