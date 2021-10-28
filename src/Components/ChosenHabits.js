import React, {useState} from "react"



function ChosenHabits({chosenHabit, setDisplayHabit, handleUnChosen}){

   //attempting to add functionality to remove button here ------ 
    const [removeHabit, setRemove] = useState(false)

    function handleRemove(){
        
        setRemove(!removeHabit)
        handleUnChosen(chosenHabit.id)
    }



    const handleDetail = () => {
        setDisplayHabit(chosenHabit)
    }



    return(
        <div> 
            <h3 className ="containerTitle">{chosenHabit.name}</h3> 
            <div className = "Habbit">
                <h3>{removeHabit.notes}</h3>
                <img src = {chosenHabit.image} width="300px" alt = {chosenHabit.name}/>
                <div>
                    <button onClick={handleDetail}>Details</button>
                    <button onClick={handleRemove} >Remove</button>
                </div>
            </div> 
        </div>
    )
}


export default ChosenHabits