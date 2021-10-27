


function Habbit ({habit}) {

    console.log(habit)
    
    function test () {
       
    }
    return (
        <div className = "Habbit" >
            <h3>{habit.name}</h3>
            <img />
            <h1>📖</h1>
            <button onClick = {test}> Add Habit </button>
            {console.log(habit)}
        </div>
    )
}


export default Habbit 