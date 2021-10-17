import React from "react";
class Clickable extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        this.onClick = this.onClick.bind(this)
    }
    onClick(e){
        e.preventDefault()
        this.setState(prevState => ({count: prevState.count+1}))
    }
    render(){
        return(
        <div>
            <p>{this.state.count}</p>
            <button onClick={this.onClick}>click</button>
        </div>
        )
    }
}
export default Clickable