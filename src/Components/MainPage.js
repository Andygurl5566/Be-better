import GlobalHeader from './GlobalHeader'
import HabbitContainer from './HabbitContainer'
import {Link} from "react-router-dom"
function MainPage ({habits}) {
    return (
        <div>
            <GlobalHeader />
            <div className = "button-div">
            <Link to ="/notes-page"> <button> Notes </button></Link>
            </div>
            <HabbitContainer habits = {habits}/>
        </div>
    )
}

export default MainPage



