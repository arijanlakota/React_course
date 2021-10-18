// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import InputUp from './classComponents/InputUp';
// import MultipleInput from './classComponents/Multipleinput';
// import Form from './Form';

function App() {
    const [inputValue,setInputValue ]= useState("")
    return(
        <div className="App">
            <InputUp className="my" defaultValue="123" onChange={(e) => setInputValue(e.target.value)} style={{minWidth:200,color: "blue"}}/>
        </div>
    )
}

export default App;
