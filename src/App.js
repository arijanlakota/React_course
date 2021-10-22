// import logo from './logo.svg';
import { useState } from 'react';
import ClickableF from './classComponents/ClickableF';
import Nav from './classComponents/Nav';
// import './App.css';

function App() {
    const [isDark,setIsDark] = useState(false)
    function darkMode(e){
        setIsDark(!isDark)
    }
    return(
        <div className="poravnanje">
        <Nav className={isDark}/>
        <ClickableF />
        <button className="zabut" onClick={darkMode}>Dark mode</button>
        </div>
    )
}

export default App;
