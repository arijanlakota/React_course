// import logo from './logo.svg';
import './App.css';
import Kartica from './Kartica';
import Naslov from './Naslov';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
    const propArr=[
        {
            id:1,
            content:"Prva Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        },
        {
            id:2,
            content:"Druga Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        },
        {
            id:3,
            content:"Treca Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        },
        {
            id:4,
            content:"Cetvrta Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        },
        {
            id:5,
            content:"Peta Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        },
        {
            id:6,
            content:"Sesta Kartica",
            description:"Ovo je deskripcija za prvu karticu"
        }
    ]
    return(
        <div>
        <div className="najdiv">
            <Naslov header="Bilo sta,nije bitno"/>
        </div>
        <div className="cardDiv">
            {propArr.map((value,index) => {
                return <Kartica content={value.content} description={value.description} key={value.index} />
            })}
        </div>
        <button id="zaBut">Button</button>
        </div>
    )
}

export default App;
