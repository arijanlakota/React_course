import React from "react";
const emojiArr = [{emoji:" 😀 ",emot:"happy"},{emoji:"👿",emot:"evil"},{emoji:"😭",emot:"sad"},{emoji:"🤧",emot:"sick"},
        {emoji:"😡",emot:"angry"},{emoji:"👻",emot:"ghost"},{emoji:"👽",emot:"alien"}]
class Emoji extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {emoji:" 😀 ",emot:"happy"}
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.tick()
        },1500)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick() {
        this.setState(emojiArr[Math.ceil(Math.random() * 10)])
    }
    render (){
        return (        
        <div>
            <h1>You are feeling: <span>{this.state.emot}</span></h1>
            <h2>{this.state.emoji}</h2>
        </div>)
    }
    
}
export default Emoji