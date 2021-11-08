// import { Children } from "react/cjs/react.development"
import '../App.css'
function Kartica({content,author,keyVal}){
    return(<div key={keyVal} className="quoteDiv">
       <p>{content}</p>
       <p>{author}</p>
    </div>)
}
export default Kartica