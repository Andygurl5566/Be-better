import {Link} from "react-router-dom"
import React, {useState} from "react"
import Info from "./Info"
import styled from "styled-components"
import image from "./img/business-leader-2080772-1753761.png"


function AboutPage(){

let welcome = ` Welcome to Hobbit Habits where small habits can make a huge change!` 
let welcome2= `Add a habit that you'd like to change by clicking 
"Add Habit". To view more details about a habit, select the 'View Habits' button.`

const [moreInfo, setMoreInfo] = useState(false)

function handleClick(){
    setMoreInfo(!moreInfo)
}

    return (
        
            <Styleddiv className="summary-container">
                <div>
                    <h1> Hobbit Habits</h1>
                    <h3> SMALL HABITS, BIG RESULTS </h3>
                    <div className="img-div">
                        <img src= {image}/>
                    </div>
                    <p> {welcome} </p>
                    <p>{welcome2}</p>  
                    
                </div>
                <div>
                    <button onClick = {handleClick}>Learn More</button> {moreInfo === false? "" : <Info/> }  
                <Link to = "/main-page"> <button> Let's Go </button> </Link> 
                </div>
            </Styleddiv>
        
    )

}

export default AboutPage


const Styleddiv = styled.div`

background-image: url("Components/Images/business-leader-2080772-1753761.png") ;

.img-div{
    padding-top:60px;
}

h1{
    font-family: 'Fugaz One', cursive;
    color: #a2c495;
    font-size:100px;
    line-height:4px;
    padding-top:20px;
    
}

h3{
    font-size:26px;
    line-height:10px;
    
}

p, li, ul{
    font-size: 20px;
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