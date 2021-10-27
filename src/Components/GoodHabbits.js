import Habbit from './Habbit'


function GoodHabbits ({habits}) {

    return (
        <div className = "habbitList" id = 'GoodHabbits'>
            <h3 className = 'containerTitle'>Good Habbits to Learn</h3>
            <Habbit />
            <Habbit />
            <Habbit />
            <Habbit />
            <Habbit />
        </div>
    )
}

export default GoodHabbits