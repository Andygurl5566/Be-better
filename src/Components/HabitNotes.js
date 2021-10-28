import {useState} from 'react'
import styled from "styled-components"


function HabitNotes({displayHabit, patchNotes}){

    const [noteText, setNoteText] = useState(displayHabit.notes)
    const [disabled, setDisabled] =useState(true)
    
    const handleChange = (e) => {
        let temp = e.target.value
        setNoteText(temp)
    }

    const handleEdit = () => {
        setDisabled(!disabled)
        setNoteText(displayHabit.notes)
    }

    const handleSave = () => {
        patchNotes(displayHabit.id, noteText)
        setDisabled(true)
        
    }

    return(
        <div>
            <h3 className ="containerTitle">{displayHabit.name}</h3> 
                <div className = "notes" >
                <textarea disabled={disabled} onChange={handleChange} rows="6" cols="50" value={disabled? displayHabit.notes : noteText}></textarea>
                <div>
                    <button onClick={handleEdit}>Edit Notes</button>
                    <button onClick={handleSave}>Save Notes</button>
                </div>
                </div>
        </div>
    )
}

export default HabitNotes

const Styleddiv = styled.div`

`