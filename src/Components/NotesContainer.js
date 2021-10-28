import React, {useState} from 'react'
import ChosenHabits from "./ChosenHabits"
import HabitNotes from './HabitNotes'
import styled from "styled-components"


function NotesContainer ({chosen, patchNotes}) {

    const [displayHabit, setDisplayHabit] = useState({name: 'Default Display', notes: 'note, note, note note note.'})
    //console.log(chosen)
    return (
        <Styleddiv>
            <div className = 'notesContainer'>
                {chosen === [] ? null : chosen.map(chosenHabit => <ChosenHabits setDisplayHabit={setDisplayHabit} key={chosen.id} chosenHabit={chosenHabit}/>)} 
            </div>
            <div className="chosen-note">
                <HabitNotes patchNotes={patchNotes} key={chosen.id} displayHabit={displayHabit}/>
            </div>
        </Styleddiv>
    )
}

export default NotesContainer


const Styleddiv = styled.div`

div{

    div{
        div{
        padding: 10px;
            }

    }
}
`