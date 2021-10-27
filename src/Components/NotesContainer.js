
import ChosenHabits from "./ChosenHabits"
import HabitNotes from './HabitNotes'

function NotesContainer ({chosen}) {

    console.log(chosen)
    return (
        <div className = 'notesContainer'>
            {chosen.length > 0 ? chosen.map(chosenHabit => <ChosenHabits chosenHabit={chosenHabit}/>) : null} 
            
            <HabitNotes chosen={chosen}/>
        </div>
    )
}

export default NotesContainer