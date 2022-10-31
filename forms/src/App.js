import './App.css';
import React, { useState } from 'react';
import PersonCard from "./components/PersonCard";
import UserForm from "./components/UserForm";
import MovieForm from "./components/MovieForm";
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
import Input from './components/Input'
import Box from './components/Box'


function App() {
  const [colors, setColors] = useState(["blue","red"]);
  
  return (
    <div>
      <ul>
                {
                    colors.map( (oneColor, idx) => 
                      <Box key={idx} color={oneColor} />
                    )
                }
            </ul>
      <Input colors={colors} setColors={setColors}/>
      
    </div>
  );
}

export default App;
