import { useCallback, useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { API } from "../api"
import '../App.css'
import Kartica from "./Malakarica"


function OneQuote(props){
    const [quote,setQuote] = useState([])
    useEffect(() => {
        API.get('random').then((quoteVal) => {
            console.log(quoteVal.data)
            setQuote(quoteVal.data)
        }).catch(() => {})
    },[])
   
    return (
            <p>{quote.content}</p>
    )
}

export default OneQuote
