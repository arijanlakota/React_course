import { useState } from "react"

function ClickableF(props){
    const [count,setCount] = useState(0)
    function onClick(e){
        setCount(count + 1)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={onClick}>Click F</button>
        </div>
    )
}
export default ClickableF