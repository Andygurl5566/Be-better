


function Habbit ({habit}) {

    console.log(habit)
    const [chose, setChosen] = useState(habit.chosen)
    function test () {
        setChosen(!chosen)
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