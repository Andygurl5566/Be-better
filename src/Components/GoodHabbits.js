import Habbit from './Habbit'


function GoodHabbits ({goodHabits}) {

    return (
        <div className = "habbitList" id = 'GoodHabbits'>
            <h3 className = 'containerTitle'>Good Habbits to Learn</h3>
            {goodHabits.map(habit => <Habbit habit={habit}/>)}
        </div>
    )
}

export default GoodHabbits