
function ChosenHabits({chosenHabit, setDisplayHabit}){
    //console.log(chosenHabit)

    const handleDetail = () => {
        setDisplayHabit(chosenHabit)
    }

    return(
        <div>
            <h3 className ="containerTitle">{chosenHabit.name}</h3> 
            <div className = "Habbit">
                <h3>{chosenHabit.notes}</h3>
                <h1>📖</h1>
                <button onClick={handleDetail}>Details</button>
            </div>
        </div>
    )
}


export default ChosenHabits