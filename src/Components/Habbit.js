


function Habbit (habit) {

    function test () {
        console.log(habit)
    }
    return (
        <div className = "Habbit">
            <h3>{habit.habit.name}</h3>
            <img />
            <h1>📖</h1>
            <button onClick = {test}> Add Habit </button>
            {console.log(habit)}
        </div>
    )
}


export default Habbit 