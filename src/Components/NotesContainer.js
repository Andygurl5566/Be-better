import React, {useState} from 'react'
import ChosenHabits from "./ChosenHabits"
import HabitNotes from './HabitNotes'

function NotesContainer ({chosen}) {

    const [displayHabit, setDisplayHabit] = useState({name: 'Default Display', notes: 'note, note, note note note.'})
    console.log(chosen)
    return (
        <div>
            <div className = 'notesContainer'>
                {chosen === [] ? null : chosen.map(chosenHabit => <ChosenHabits setDisplayHabit={setDisplayHabit} key={chosen.id} chosenHabit={chosenHabit}/>)} 
            </div>
            <div>
                <HabitNotes key={chosen.id} displayHabit={displayHabit}/>
            </div>
        </div>
    )
}

export default NotesContainer