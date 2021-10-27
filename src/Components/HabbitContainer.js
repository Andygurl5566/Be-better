import GoodHabbits from './GoodHabbits'
import BadHabbits from  './BadHabbits'

function HabbitContainer ({habits, handleChosen}) {

    function filterGood() {
        return habits.filter(habit => habit.good === true)
    }
    //console.log(filterGood())

    function filterBad () {
        return habits.filter(habit => habit.good === false)
    }

    return (
        <div className = 'habbitContainer'>
            <GoodHabbits handleChosen={handleChosen} goodHabits={filterGood()}/>
            <BadHabbits handleChosen={handleChosen} badHabits={filterBad()}/> 
        </div>
    )
}

export default HabbitContainer