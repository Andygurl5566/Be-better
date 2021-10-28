import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"
import NotesContainer from "./NotesContainer.js"


function NotesPage({chosen, patchNotes, handleUnChosen}){
   

    const notesTest = () => {
     
    }


    return (
    <div>
        <GlobalHeader />
            <div className = "button-div">
                <Link to ="/main-page"> 
                     <button> Back </button>
                </Link>
                <NotesContainer patchNotes={patchNotes} key={chosen.id} chosen={chosen} handleUnChosen={handleUnChosen}/>
            </div>
    
    </div>
    )

}

export default NotesPage