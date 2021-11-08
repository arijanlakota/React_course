
import "./App.css";
import NewsFetch from "./classComponents/NewsFetch";
import {Routes,Route} from "react-router-dom"
import SearchNews from "./classComponents/SearchNews";

// import {Routes,Route,Link} from "react-router-dom"




function App() {
  return <>
  {/* <div className="navbarDiv">
    <button className="forBut">Top-headlines</button>
    <button className="forBut">Search</button>
  </div> */}
  {/* <NewsFetch/> */}
  <SearchNews/>
  </>
      
}

export default App;