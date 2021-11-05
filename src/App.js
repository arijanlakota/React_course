import { useContext } from "react";
import "./App.css";
import Quote from "./classComponents/Quote";
import Row from "./classComponents/Row";
import {Routes,Route,Link} from "react-router-dom"
import OneQuote from "./classComponents/Onequote";



function App() {
  return <>
    <div className="Routediv">
      <div>
      <Link className="zalink" to="/multiple">Multiple</Link>
      </div>
      <div>
      <Link className="zalink" to="/one">One</Link>
      </div>
    </div>
    <Routes>
    <Route path="/one" element={<OneQuote/>} />
    <Route path="multiple" element={<Quote/>} />
    <Route path="*" element={<p>error</p>} />
  </Routes>
  
  </>
      
}

export default App;