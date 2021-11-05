import { useCallback, useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { API } from "../api"
import '../App.css'
import Kartica from "./Malakarica"


function Quote(props){
    const [quote,setQuote] = useState([])
    useEffect(() => {
        API.get('quotes?page=1').then((quoteVal) => {
            console.log(quoteVal.data.results)
            setQuote(quoteVal.data.results)
        }).catch(() => {})
    },[])
    // useEffect(() => { 
    //     try {
    //         const fetchQuote = async () =>  {
    //         const result = await API.get('random')
    //         setQuote(result.data)
    //         }
    //     } catch (error) {
            
    //     }
        
    // })
    // const fetchQuote = useCallback(async () => {
    //     const result = await API.get('random')
    //     return result.data
    // },[])
    // useEffect(()=>{
    //     fetchQuote().then((data) => {
    //         setQuote(data)
    //     })
    // },[])
    return (
            <div>{quote.map((value) =>  {return <Kartica author={value.author} content={value.content} />})}</div>
    )
}

export default Quote
