import { useState } from "react"

function ClickableF({className}){
    const [count,setCount] = useState(0)
    function onClick(e){
        setCount(count + 1)
    }
    return(
        <div className="">
            <p className={`${className ? "dark" : ""}`}>{count}</p>
            <button onClick={onClick} >Click F</button>
        </div>
    )
}
export default ClickableF