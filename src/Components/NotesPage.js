import GlobalHeader from "./GlobalHeader"
import {Link} from "react-router-dom"
import NotesContainer from "./NotesContainer.js"
import styled from "styled-components"



function NotesPage({chosen, patchNotes, handleUnChosen}){
   

    const notesTest = () => {
     
    }


    return (
    <Styleddiv>
        {/* <GlobalHeader /> */}

            <div className = "button-div">
                <Link to ="/main-page"> 
                     <button className="back"> Back </button>
                </Link>
                <NotesContainer patchNotes={patchNotes} key={chosen.id} chosen={chosen} handleUnChosen={handleUnChosen}/>
            </div>
    
    </Styleddiv>
    )

}

export default NotesPage

const Styleddiv = styled.div`


button{
    width:110px;
    height:50px;
    font-size:18px;
    margin:10px,0;

    
}

.back{
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