import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
function Kartica(){
    const ikonica = props.icon
    return(
        <div className="zaKarticu">
            <div className="zaIkonu">
            <FontAwesomeIcon icon={solid(ikonica)} />
            </div>
            <h3>{content}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Kartica