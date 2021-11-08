import { useEffect, useState } from "react"
import { newApi } from "../api/newApi"
import Kartica from "./Malakarica"

function NewsFetch(props){
    const [news,setNews] = useState([])
    // useEffect(() => {
    //     try {
    //         const newsFet = async () => {
    //             const result = await newApi.get("")
    //             setNews(result.data.articles)
    //             console.log(news)

    //         }
    //     } catch (error) {
            
    //     }
    // })
    useEffect(() => {
            newApi.get('').then((result) => {
                console.log(result.data.articles)
                setNews(result.data.articles)
            }).catch(() => {})
        },[])
    return(
        <div>{news.map((value) => {

            return <Kartica  author={value.author} content={value.title}/>
        })}</div>
    )   
}
export default NewsFetch