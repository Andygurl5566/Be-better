import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"


function NotesPage({habits}){
    return (
    <div>
        <GlobalHeader />
        <div className = "button-div">
            <Link to ="/main-page"> <button> Back</button></Link>
        </div>
    
    </div>
    )

}

export default NotesPage