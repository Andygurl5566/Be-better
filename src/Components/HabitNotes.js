import {useState} from 'react'


function HabitNotes({displayHabit}){

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

    return(
        <div>
            <h3 className ="containerTitle">{displayHabit.name}</h3> 
                <div className = "notes" >
                <textarea disabled={disabled} onChange={handleChange} rows="6" cols="50" value={disabled? displayHabit.notes : noteText}></textarea>
                <button onClick={handleEdit}>Edit Notes</button>
                <button>Save Notes</button>
                </div>
        </div>
    )
}

export default HabitNotes