import {Link} from "react-router-dom"
import React, {useState} from "react"
import Info from "./Info"
import styled from "styled-components"


function AboutPage(){

let welcome = ` Welcome to Hobbit Habits where small habits can make a huge change! Add a habit that you'd like to change by clicking 
"Add Habit". To view more details about a habit, visit the notes tab.`

const [moreInfo, setMoreInfo] = useState(false)

function handleClick(){
    setMoreInfo(!moreInfo)
}

    return (
        <>
            <Styleddiv className="summary-container">
                <div>
                    <h1> Hobbit Habits</h1>
                    <h3> Small habits, large results </h3>
                    <p> {welcome} </p>  
                    
                </div>
                <div>
                    <button onClick = {handleClick}>Learn More</button> {moreInfo === false? "" : <Info/> }  
                <Link to = "/main-page"> <button> Let's Go </button> </Link> 
                </div>
            </Styleddiv>
        </>
    )

}

export default AboutPage


const Styleddiv = styled.div`

background-image: url("Components/Images/business-leader-2080772-1753761.png") ;



h1{
    font-family: 'Fugaz One', cursive;
    color: #a2c495;
    font-size:100px;
}

h3{
    font-size:30px;
    
}


div{
padding-bottom: 10px;
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

visited{
    color:white;
}

h1{

}


`