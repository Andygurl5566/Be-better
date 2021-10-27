import Habbit from './Habbit'


function BadHabbits ({badHabits}) {

    return (
        <div className = "habbitList" id = 'BadHabbits' key={badHabits.id}>
            <h3 className = 'containerTitle'>Bad Habbits to Break</h3>
            {badHabits.map(habit => <Habbit key={habit.id} habit = {habit}/>)}
        </div>
    )
}

export default BadHabbits