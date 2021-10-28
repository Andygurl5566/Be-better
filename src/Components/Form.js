import { template } from "lodash"
import {useState} from "react"
import styled from "styled-components"



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
        <Styleddiv>
    
            <form>
                <label for='habitName'> Habbit Name: </label>
                <input onChange={handleName} value={formObj.name} id='habitName' type ='text' name='habitName'placeholder='habit name here....'></input>

                <div>
                    <label for='good' > Good Habit to Form </label>
                    <input onChange={handleGood} type='radio' id='good' name='goodBad'></input>
                </div>

                <div>
                    <label for='bad'> Bad Habit to Break </label>
                    <input onChange={handleBad} type='radio' id='bad' name='goodBad'></input>
                </div>

                <label for='image'> picture or emoji </label>
                <input onChange={handleImage} value={formObj.image} id='imageInput' type='text' name='imageInput' placeholder='image/emoji here'></input>

            </form>
            <div classNAme="button-div">
                <button onClick={testing}>testform</button>
            </div>
        </Styleddiv>
    )
}

export default Form


const Styleddiv = styled.div`
text-align: center;

h3{  

}

.button-div {
    padding-top: 20px;
}


`