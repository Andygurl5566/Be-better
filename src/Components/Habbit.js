import styled from "styled-components"
import image from "./img/icons8-thinking-64.png"


function Habbit ({habit, handleChosen}) {

    //console.log(habit)
    
    function test () {
       handleChosen(habit.id)
    }
    return (
        <Styledh3 className = "Habbit" >
            <h3>{habit.name}</h3>
            <img src ={habit.image} width = "300px" alt={habit.name}/>
            <div>
            <img src={image} width = "0px"/>
            </div>
            <button onClick = {test}> Add Habit </button>
        </Styledh3>
    )
}


export default Habbit 

const Styledh3 = styled.h3`
padding-bottom:18px;

// button{
//     display:inline-block;
//  padding:0.3em 1.2em;
//  margin:0 0.3em 0.3em 0;
//  border-radius:2em;
//  box-sizing: border-box;
//  text-decoration:none;
// font-size:18px;
//  
//  font-weight:300;
//  color:#FFFFFF;
//  background-color:#576894;
//  text-align:center;
//  transition: all 0.2s;

// }

button{
    
font-size:18px;
 padding: 10px;
border-radius:2em;
font-weight:300;

 

}

`
