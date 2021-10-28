
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
                <img src = {chosenHabit.image} width="300px" alt = {chosenHabit.name}/>
                <button onClick={handleDetail}>Details</button>
            </div>
        </div>
    )
}


export default ChosenHabits