import Habbit from './Habbit'


function GoodHabbits ({goodHabits, handleChosen}) {
    console.log(goodHabits)

    return (
        <div className = "habbitList" id = 'GoodHabbits' >
            <h3 className = 'containerTitle'>Good Habbits to Learn</h3>
            {goodHabits.map(habit => <Habbit handleChosen={handleChosen} key={habit.id} habit={habit}/>)}
        </div>
    )
}

export default GoodHabbits