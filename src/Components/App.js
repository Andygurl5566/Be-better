
import {Switch, Route} from "react-router-dom"
import HomePage from './HomePage';
import {Link} from "react-router-dom"
import MainPage from "./MainPage"
import NotesPage from ". NotesPage";
import Logo from './Logo';
function App() {
  return (
   
    <>
      <Link to = "/"> <Logo/> </Link>
      <Switch>
        <Route exact path = "/">
          <HomePage />
        </Route>
        <Route path = "/main-page">
          <MainPage />
        </Route>
        <Route path = " notes-page">
           <NotesPage/>
        </Route>
        <Route path = "*">
          <h1> 404 not found</h1>
        </Route>
      </Switch>
    </>
   
  );
}

export default App;
