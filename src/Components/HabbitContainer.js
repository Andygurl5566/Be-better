import GoodHabbits from './GoodHabbits'
import BadHabbits from  './BadHabbits'

function HabbitContainer ({habits}) {


    return (
        <div className = 'habbitContainer'>
            <GoodHabbits habits={habits}/>
            <BadHabbits habits={habits}/> 
        </div>
    )
}

export default HabbitContainer