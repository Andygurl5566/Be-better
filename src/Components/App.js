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
  useEffect(() => {
    fetch("http://localhost:4000/habits")
    .then(r => r.json())
    .then(setHabits)
   }, [])
   //console.log(habits)

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

  const chosenFilter = () => {
    if(habits.length > 0){
    return habits.filter(habit => habit.chosen === true)
  } else {
    return []
  }}
  console.log(chosenFilter())


  return (
   
    <>
      <Link to = "/"> <Logo/> </Link>
      <Switch>
        <Route exact path = "/">
          <AboutPage />
        </Route>
        <Route path = "/main-page">
          <MainPage chosen= {chosen} handleChosen={handleChosen} habits={habits}/>
        </Route>
        <Route path = "/notes-page">
          {console.log(chosenFilter())}
           <NotesPage chosen={chosenFilter()} habits={habits}/>
        </Route>
        <Route path = "*">
          <h1> 404 not found</h1>
        </Route>
      </Switch>
    </>
   
  );
}

export default App;
