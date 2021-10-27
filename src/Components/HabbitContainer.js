import GoodHabbits from './GoodHabbits'
import BadHabbits from  './BadHabbits'

function HabbitContainer ({habits}) {

    function filterGood() {
        return habits.filter(habit => habit.good === true)
    }

    function filterBad () {
        return habits.filter(habit => habit.good === false)
    }

    return (
        <div className = 'habbitContainer'>
            <GoodHabbits goodHabits={filterGood()}/>
            <BadHabbits badHabits={filterBad()}/> 
        </div>
    )
}

export default HabbitContainer