import { template } from "lodash"
import {useState} from "react"


function Form () {

    const [formObj, setFormObj] = useState({chosen: true, accomplished: false, name: '', notes: '', image: ''})

    const handleName = (e) => {
    let temp = {...formObj}
    temp.name = e.target.value
    setFormObj(temp)
    }

    const handleImage = (e) => {
        let temp = {...formObj}
        temp.image = e.target.value
        setFormObj(temp)
        }

    const handleGood = () => {
        let temp = {...formObj}
        temp.good = true
        setFormObj(temp)
    }

    const handleBad = () => {
        let temp = {...formObj}
        temp.good = false
        setFormObj(template)
    }


    const testing = () => {
    console.log(formObj)
    
    }


    return (
        <div>
            <h3>Dont see the habit you are looking for below? Add it here!</h3>
            <form>
                <label for='habitName'>Habbit Name:</label>
                <input onChange={handleName} value={formObj.name} id='habitName' type ='text' name='habitName'placeholder='habit name here....'></input>

                <label for='good' >Good Habit to Form</label>
                <input onChange={handleGood} type='radio' id='good' name='goodBad'></input>

                <label for='bad'>Bad Habit to Break</label>
                <input onChange={handleBad} type='radio' id='bad' name='goodBad'></input>

                <label for='image'>picture or emoji</label>
                <input onChange={handleImage} value={formObj.image} id='imageInput' type='text' name='imageInput' placeholder='image/emoji here'></input>

            </form>
            <button onClick={testing}>testform</button>
        </div>
    )
}

export default Form