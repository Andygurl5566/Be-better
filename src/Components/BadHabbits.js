import Habbit from './Habbit'


function BadHabbits ({badHabits, handleChosen}) {

    return (
        <div className = "habbitList" id = 'BadHabbits' key={badHabits.id}>
            <h3 className = 'containerTitle'>Bad Habbits to Break</h3>
            {badHabits.map(habit => <Habbit handleChosen={handleChosen} key={`bad-${habit.id}`} habit = {habit}/>)}
        </div>
    )
}

export default BadHabbits