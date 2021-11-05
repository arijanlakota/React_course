import { useNavigate, useParams } from "react-router";

function RouterProps(props){
    const {id} = useParams()
    const navigate = useNavigate()

    if(id === "1"){
        return <div>1</div>
    }
        return <div>2</div>
    
}
export default RouterProps