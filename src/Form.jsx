import { useState } from 'react'
import './App.css'
function Form(){
    const [firstName,setfirstName] = useState("")
    const [email,setemail] = useState("")
    const [lastName,setlastName] = useState("")
    const [error, setError] = useState([])
    function handleFName(e){

    }
    function handleLName(e){
        
    }
    function handleMail(e){
        
    }
    function handleClick(e){
        
    }

    return(
        <form>
            <label for="first_name">first name</label>
            <input onChange={handleFName} type="text" value={firstName} name="first name" id="first_name"/>
            <label for="last_name">last name</label>
            <input onChange={handleLName} type="text" value={lastName} name="lastName" id="last_name"/>
            <label for="email">Your email</label>
            <input onChange={handleMail} type="email" value={email} id="email"/>
            <div>
            <p>Choose your age category</p>
            <input type="radio" id="young" value="5-15" name="ages"/>
            <label for="young">5-15</label><br/>
            <input type="radio" id="teen" value="16-25" name="ages"/>
            <label for="teen">16-25</label><br/>
            <input type="radio" id="mature" value="26-40" name="ages"/>
            <label for="mature">26-40</label><br/>
            <input type="radio" id="old" value="41-60" name="ages"/>
            <label for="old">41-60</label>
            </div>
            <div>
                <p>Select your job</p>
                <input  type="checkbox" id="fireworker"/>
                <label   for="fireworker">fireworker</label><br/>
                <input type="checkbox" id="proprogrammer"/>
                <label for="proprogrammer">proprogrammer</label><br/>
                <input type="checkbox" id="engineer"/>
                <label for="engineer">engineer</label>
            </div>
            <div className="butdiv">
            <button onclick={handleClick}className="but">Submit</button>
            </div>
            <p>Errors:</p>
            {error.length > 0 && error.map((value, index) => (<p key={index}>{value}</p>))}


        </form>
    )
}
export default Form