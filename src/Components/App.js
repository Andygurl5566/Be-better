//Hooks
import {Switch, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
//Components
import AboutPage from "./AboutPage";
import NotesPage from "./NotesPage";
import Logo from './Logo';
import MainPage from "./MainPage";

function App() {
  const [habits, setHabits] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/habits")
    .then(r => r.json())
    .then(setHabits)
   }, [])
   console.log(habits)
  return (
   
    <>
      <Link to = "/"> <Logo/> </Link>
      <Switch>
        <Route exact path = "/">
          <AboutPage />
        </Route>
        <Route path = "/main-page">
          <MainPage habits={habits}/>
        </Route>
        <Route path = "/notes-page">
           <NotesPage habits={habits}/>
        </Route>
        <Route path = "*">
          <h1> 404 not found</h1>
        </Route>
      </Switch>
    </>
   
  );
}

export default App;
