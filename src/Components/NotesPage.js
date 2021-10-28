import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"
import NotesContainer from "./NotesContainer.js"


function NotesPage({chosen}){
    console.log(chosen.length)

    const notesTest = () => {
        console.log(chosen)
    }


    return (
    <div>
        <GlobalHeader />
        <button onClick={notesTest}>Notes Test</button>
            <div className = "button-div">
                <Link to ="/main-page"> <button> Back </button></Link>
                <NotesContainer key={chosen.id} chosen={chosen}/>
            </div>
    
    </div>
    )

}

export default NotesPage