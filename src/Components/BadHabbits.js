import Habbit from './Habbit'


function BadHabbits ({badHabits}) {

    return (
        <div className = "habbitList" id = 'BadHabbits'>
            <h3 className = 'containerTitle'>Bad Habbits to Break</h3>
            {badHabits.map(habit => <Habbit habit = {habit}/>)}
        </div>
    )
}

export default BadHabbits