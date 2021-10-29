import { template } from "lodash"
import {useState} from "react"
import styled from "styled-components"



function Form ({handleNewHabit}) {

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
        setFormObj(temp)
    }


    const testing = () => {
    console.log(formObj)
    handleNewHabit(formObj)
    
    
    }

    


    return (
        <Styleddiv>
    
            <form>
                <label htmlFor='habitName'> Habbit Name: </label>
                <input onChange={handleName} value={formObj.name} id='habitName' type ='text' name='habitName'placeholder='habit name here....'></input>

                <div>
                    <label htmlFor='good' > Good Habit to Form </label>
                    <input onChange={handleGood} type='radio' id='good' name='goodBad'></input>
                </div>

                <div>
                    <label htmlFor='bad'> Bad Habit to Break </label>
                    <input onChange={handleBad} type='radio' id='bad' name='goodBad'></input>
                </div>

                <label htmlFor='image'> Picture or Emoji </label>
                <input onChange={handleImage} value={formObj.image} id='imageInput' type='text' name='imageInput' placeholder='image/emoji here'></input>

            </form>
            <div className="button-div">
                <button onClick={testing}>ADD</button>
            </div>
        </Styleddiv>
    )
}

export default Form


const Styleddiv = styled.div`
font-size:25px;
letter-spacing: .5px;
text-align: center;
padding-bottom:20px;

input[type=text]{
    padding:50px:
    font-size:50px;
    margin:20px 0;
    border-radius:10px;
    height: 30px;
      
}

h3{  

}

.button-div {
    padding-top: 20px;
}

button{
    width:100px;
    height:40px;
    font-size:20px;
}


`