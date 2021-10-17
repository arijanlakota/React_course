
import React, { useEffect, useState } from "react"

function RandomEmoji(props){
    const emojiArr = [{emoji:" 😀 ",emot:"happy"},{emoji:"👿",emot:"evil"},{emoji:"😭",emot:"sad"},{emoji:"🤧",emot:"sick"},
        {emoji:"😡",emot:"angry"},{emoji:"👻",emot:"ghost"},{emoji:"👽",emot:"alien"}]
    const [emoji,setEmoji] = useState("")
    
    useEffect(()=>{
        const emoID = setInterval(()=>{
        tick()
        },1000)

        return () => clearInterval(emoID)
    })

    function tick() {
        const emojiO = emojiArr[Math.floor(Math.random() * emojiArr.length)]
        setEmoji(emojiO.emoji)
    }
    return(
        <h2>{emoji}</h2>
    )
}
export default RandomEmoji