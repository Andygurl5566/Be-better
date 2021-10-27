import GlobalHeader from './GlobalHeader'
import HabbitContainer from './HabbitContainer'
import {Link} from "react-router-dom"
function MainPage ({habits, handleChosen, chosen}) {
    function testing () {
        console.log(chosen)
    }
    return (
        <div>
            <GlobalHeader />
            <button onClick={testing}>test</button>
            <div className = "button-div">
            <Link to ="/notes-page"> <button> Notes </button></Link>
            </div>
            <HabbitContainer handleChosen={handleChosen} habits = {habits}/>
        </div>
    )
}

export default MainPage



