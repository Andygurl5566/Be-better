import GlobalHeader from './GlobalHeader'
import HabbitContainer from './HabbitContainer'
import {Link} from "react-router-dom"
import Form from './Form.js'
import styled from "styled-components"
import React, {useState} from 'react'


function MainPage ({habits, handleChosen, chosen, handleNewHabit}) {
    const [moreInfo, setMoreInfo] = useState(false)

    function handleClick(){
        //console.log(moreInfo) 
        setMoreInfo(!moreInfo)
    }

    function testing () {
        console.log(chosen)
    }
    return (
        <div>
            <GlobalHeader />
            <Styledh3>Dont see the habit you are looking for below? <button onClick = {handleClick}> Add it here! </button></Styledh3>
            {moreInfo ? <Form  handleNewHabit={handleNewHabit}/> : ""}
            <button onClick={testing}>test</button>
            <div className = "button-div">
                <Link to ="/notes-page"> <button> View My Habits </button></Link>
            </div>
            <HabbitContainer handleChosen={handleChosen} habits = {habits}/>
        </div>
    )
}

export default MainPage

const Styledh3 = styled.h3`
text-align: center;
`




