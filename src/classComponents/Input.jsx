import { useState } from "react"

function Input(props){
    const [mail,setMail] = useState(" ")
    const [error,setError] = useState(" ")
    function onChange(e){
        setMail(e.target.value)
    }
    function handelClick(e){
        let errstr = ""
        if(mail.length > 10){
            errstr += "your input must have less than 10 chars"
        }
        if(mail[0] !== "A"){
            errstr += "You Email must start with A"
        }
        setError(errstr)
        setMail(mail)
    }
    return(
        <div>
            {error && (<p>{error}</p>)}
            <input required type="email" value={mail} onChange={onChange}/>
            <button onClick={handelClick}>Submit</button>
        </div>
    )
}
export default Input