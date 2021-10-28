import Habbit from './Habbit'


function GoodHabbits ({goodHabits, handleChosen}) {
    //console.log(goodHabits)
    const rando = () => Math.floor(Math.random()*100000)
    return (
        <div className = "habbitList" id = 'GoodHabbits' >
            <h3 className = 'containerTitle'>Good Habbits to Learn</h3>
            {goodHabits.map(habit => <Habbit handleChosen={handleChosen} key={`good-${habit.id}`} habit={habit}/>)}
        </div>
    )
}

export default GoodHabbits