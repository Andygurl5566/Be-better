import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"
import NotesContainer from "./NotesContainer.js"


function NotesPage({habits}){
    return (
    <div>
        <GlobalHeader />
            <div className = "button-div">
                <Link to ="/main-page"> <button> Back</button></Link>
                <NotesContainer/>
            </div>
    
    </div>
    )

}

export default NotesPage