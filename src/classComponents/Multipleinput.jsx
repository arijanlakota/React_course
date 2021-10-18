import { useState } from "react"
const inputList = [
    {name:"text1",type:"radio"},
    {name:"text2",type:"checkbox"},
    {name:"text3",type:"text"},
    {name:"text4",type:"text"}
]
function MultipleInput(props){
    const [inputs,setInputs]=useState({})
    function handleChange(e){
        setInputs({...inputs,[e.target.id] : e.target.value})
    }
    console.log(inputs)
    return(
        <div>
            {inputList.map((value,index)=> {return <input name={value.name} value={inputs[value.name] || ""} id={value.id} key={index} onChange={handleChange}/>})}
            <button>Submit</button>
        </div>
    )
}
export default MultipleInput