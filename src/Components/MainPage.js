import GlobalHeader from './GlobalHeader'
import HabbitContainer from './HabbitContainer'


function MainPage ({habits}) {

    return (
        <div>
            <GlobalHeader />
            <HabbitContainer habits={habits}/>
        </div>
    )
}

export default MainPage