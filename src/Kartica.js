import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
function Kartica({content="Nista niste uneli", description = "Nista niste uneli",}){
    return(
        <div className="zaKarticu">
            <div className="zaIkonu">
            </div>
            <h3 id="h3id">{content}</h3>
            <p id="pid">{description}</p>
        </div>
    )
}
export default Kartica
