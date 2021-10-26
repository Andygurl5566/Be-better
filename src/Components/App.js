
import {Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import AboutPage from "./AboutPage";
import NotesPage from "./NotesPage";
import Logo from './Logo';
import MainPage from "./MainPage"

function App() {

  return (
   
    <>
      <Link to = "/"> <Logo/> </Link>
      <Switch>
        <Route exact path = "/">
          <AboutPage />
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
