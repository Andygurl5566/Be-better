
function HabitNotes({displayHabit}){
    return(
        <div>
            <h3 className ="containerTitle">{displayHabit.name}</h3> 
                <div className = "notes" >
                <textarea rows="4" cols="50" value={displayHabit.notes}></textarea>
                </div>
        </div>
    )
}

export default HabitNotes