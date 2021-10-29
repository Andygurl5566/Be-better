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
            {/* <GlobalHeader /> */}
            <Styledh3>Don't see the habit you are looking for below? <button onClick = {handleClick}> Add it here! </button></Styledh3>
            {moreInfo ? <Form  handleNewHabit={handleNewHabit}/> : ""}
            {/* <button onClick={testing}>test</button> */}
            <div className = "button-div">
                <Link to ="/notes-page"> <Styledbtn className="view"> View My Habits </Styledbtn></Link>
            </div>
            <HabbitContainer handleChosen={handleChosen} habits = {habits}/>
        </div>
    )
}

export default MainPage

const Styledh3 = styled.h3`
text-align: center;
font-size:40px;

.view{
  font-size:30px;  
}

button{
    display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.3em 0.3em 0;
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
font-size:20px;
 
 font-weight:300;
 color:#FFFFFF;
 background-color:#576894;
 text-align:center;
 transition: all 0.2s;
}
button:hover{
 background-color:#a2c495;
}
@media all and (max-width:30em){
 a.button3{
  display:block;
  margin:0.2em auto;
 }
}
`
const Styledbtn = styled.button`
display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.3em 0.3em 0;
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
font-size:20px;
 
 font-weight:300;
 color:#FFFFFF;
 background-color:#576894;
 text-align:center;
 transition: all 0.2s;
}
button:hover{
 background-color:#a2c495;
}
@media all and (max-width:30em){
 a.button3{
  display:block;
  margin:0.2em auto;
 }

`




