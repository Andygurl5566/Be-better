import {Link} from "react-router-dom"
import React, {useState} from "react"
import Info from "./Info"


function AboutPage(){

let welcome = ` Welcome to Hobbit Habits where small habits can make a huge change! Add a habit that you'd like to change by clicking 
"Add Habit". To view more details about a habit, visit the notes tab.`

const [moreInfo, setMoreInfo] = useState(false)

function handleClick(){

    setMoreInfo(!moreInfo)
}

    return (
        <>
            <div className="summary-container">
                <div>
                    <h1> Hobbit Habits</h1>
                    <h3> Small habits, large results </h3>
                    <p> {welcome} </p>  
                    <button onClick = {handleClick}> Learn More</button>
                     {moreInfo === false? "" : <Info/> }  
                </div>
                <button><Link to="/main-page"> Let's Go </Link> </button>
            </div>
        </>
    )

}

export default AboutPage