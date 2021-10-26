import GlobalHeader from './GlobalHeader'
import HabbitContainer from './HabbitContainer'
import {Link} from "react-router-dom"
import styled from "styled-components"


function MainPage () {

    return (
        <div>
            <GlobalHeader />
            <div className = "button-div">
            <Link to ="/notes-page"> <button> Notes </button></Link>
            </div>
            <HabbitContainer />
        </div>
    )
}

export default MainPage



