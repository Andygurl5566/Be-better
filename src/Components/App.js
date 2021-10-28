//Hooks
import {Switch, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
//Components
import AboutPage from "./AboutPage";
import NotesPage from "./NotesPage";
import Logo from './Logo';
import MainPage from "./MainPage";

function App() {
  const [chosen, setChosen] = useState([])
  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState([])
  const [renderToggle, setRenderToggle] = useState(true)
  useEffect(() => {
    fetch("http://localhost:4000/habits")
    .then(r => r.json())
    .then((data) => {
      setHabits(data)
      setChosen(data.filter(habit => habit.chosen === true))
    })
  }, [renderToggle])

   console.log(habits)
  //attempting to add new habits to the habit list

  function handleNewHabit(formObj){

    let temp = formObj
    temp.id= (habits.length + 1)
    console.log(temp)
    
    fetch(`http://localhost:4000/habits/`, {
      method: 'POST',
      body: JSON.stringify(
        temp
      ),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => setHabits([data, ...habits ]))
} 

  const patchNotes = (id, notesUpdate) => {
    //console.log(id, notesUpdate)
    fetch(`http://localhost:4000/habits/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        notes: notesUpdate
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(update => console.log(update))
    setRenderToggle(!renderToggle)
  }

  function handleChosen(id) {
    fetch(`http://localhost:4000/habits/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        chosen: true
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => setChosen([...chosen, data]))
    
  }

  // const chosenFilter = () => {
  //   if(habits.length > 0){
  //   return habits.filter(habit => habit.chosen === true)
  // } else {
  //   return []
  // }}
  //console.log(chosenFilter())



  return (
   
    <>
      <Link to = "/"> <Logo/> </Link>
      <Switch>
        <Route exact path = "/">
          <AboutPage />
        </Route>
        <Route path = "/main-page">
          <MainPage chosen= {chosen} handleNewHabit={handleNewHabit} handleChosen={handleChosen} habits={habits}/>
        </Route>
        <Route path = "/notes-page">
          {/* {console.log(chosenFilter())} */}
           <NotesPage patchNotes={patchNotes} chosen={chosen} habits={habits}/> {/*passed chosen instead of chosenFilter.  both kinda work, need to adjust this. */}
        </Route>
        <Route path = "*">
          <h1> 404 not found</h1>
        </Route>
      </Switch>
    </>
   
  );
}

export default App;
