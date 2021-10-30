import { useContext, useState } from 'react'
import { AppContext } from '..'
import '../App.css'
function Nav({className}){
    const Theme = useContext(AppContext)
    const {ThemeVal} = Theme
    return(
        <>
        <div className= {`zanav ${ThemeVal === "dark" ? "dark" : ""}`}>
            <h2 className={`zanav ${ThemeVal === "dark" ? "darkP" : ""}`}>Tailblock</h2>
            <div className="manji">
                <p  className={`zanav ${ThemeVal === "dark" ? "darkP" : ""}`}>First link</p>
                <p  className={`zanav ${ThemeVal === "dark" ? "darkP" : ""}`}>Second link</p>
                <p  className={`zanav ${ThemeVal === "dark" ? "darkP" : ""}`}>Third link</p>
                <p  className={`zanav ${ThemeVal === "dark" ? "darkP" : ""}`}>Fourt link</p>
            </div>
        </div>
        </>
    )
}
export default Nav