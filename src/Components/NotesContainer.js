
import ChosenHabits from "./ChosenHabits"
import HabitNotes from './HabitNotes'

function NotesContainer ({chosen}) {

    console.log(chosen)
    return (
        <div className = 'notesContainer'>
            {chosen === [] ? null : chosen.map(chosenHabit => <ChosenHabits key={chosen.id} chosenHabit={chosenHabit}/>)} 
            
            <HabitNotes key={chosen.id} chosen={chosen}/>
        </div>
    )
}

export default NotesContainer