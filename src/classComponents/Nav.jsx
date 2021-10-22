import { useState } from 'react'
import '../App.css'
function Nav({className}){
    return(
        <>
        <div className= {`zanav ${className ? "dark" : ""}`}>
            <h2 className={`zanav ${className ? "darkP" : ""}`}>Tailblock</h2>
            <div className="manji">
                <p  className={`zanav ${className ? "darkP" : ""}`}>First link</p>
                <p  className={`zanav ${className ? "darkP" : ""}`}>Second link</p>
                <p  className={`zanav ${className ? "darkP" : ""}`}>Third link</p>
                <p  className={`zanav ${className ? "darkP" : ""}`}>Fourt link</p>
            </div>
        </div>
        </>
    )
}
export default Nav