import { useState } from 'react'
import './App.css'
function Form(){
    const [firstName,setfirstName] = useState("")
    const [email,setemail] = useState("")
    const [lastName,setlastName] = useState("")
    const [radVal,setradVal] = useState("")
    const [checkVal,setcheckVal] = useState("")
    const [error, setError] = useState([])
    let check = ""
    function handleFName(e){
        const value = e.target.value
        setfirstName(value)
    }
    function handleLName(e){
        const value = e.target.value
        setlastName(value)
    }
    function handleMail(e){
        const value = e.target.value
        setemail(value)
    }
    function  handleRadio(e){
        const value= e.target.value
        setradVal(value)
    }
    function handelCheck(e){
        const value = e.target.value
        setcheckVal(value)
        check += checkVal
    }
    function handleClick(e){
        let error1 = []
        if((firstName.length === 0 || firstName <= 10)){
            error1.push("First name can't be empty or grater than 10 chars")
        }
        if((lastName.length === 0 || lastName <= 10)){
            error1.push("Last name can't be empty or grater than 10 chars")
        }
        if(email === ""){
            error1.push("email can't be empty")
        }
        if(radVal === ""){
            error1.push("You must click on a radio button")
        }
        // if(check === ""){
        //     error1.push("You must click on at least one checkbox")
        // }
        setError(error1)
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
            <input onChange={handleRadio} type="radio" id="young" value="5-15" name="ages"/>
            <label for="young">5-15</label><br/>
            <input onChange={handleRadio}type="radio" id="teen" value="16-25" name="ages"/>
            <label for="teen">16-25</label><br/>
            <input onChange={handleRadio} type="radio" id="mature" value="26-40" name="ages"/>
            <label for="mature">26-40</label><br/>
            <input  onChange={handleRadio} type="radio" id="old" value="41-60" name="ages"/>
            <label for="old">41-60</label>
            </div>
            <div>
                <p>Select your job</p>
                <input onChange={handelCheck} type="checkbox" id="fireworker" value="fireworker"/>
                <label   for="fireworker">fireworker</label><br/>
                <input onChange={handelCheck} type="checkbox" id="proprogrammer" value="programmer"/>
                <label for="proprogrammer">proprogrammer</label><br/>
                <input  onChange={handelCheck} type="checkbox" id="engineer" value="engineer"/>
                <label for="engineer">engineer</label>
            </div>
            <div className="butdiv">
            <button onClick={handleClick}className="but">Submit</button>
            </div>
            <p>Errors:</p>
            {error.length > 0 && error.map((value, index) => (<p key={index}>{value}</p>))}
            {error===0 && console.log(firstName,lastName,email,radVal,check)}


        </form>
    )
}
export default Form