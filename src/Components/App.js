
import HomePage from './HomePage';
import MainPage from "./MainPage"
import {Switch, Route} from "react-router-dom"
import GlobalHeader from './GlobalHeader';

function App() {
  return (
   
    <>
    <GlobalHeader/>
    <Switch>
      <Route path = "/home">
        <HomePage />
      </Route>
      <Route path = "/main-page">
        <MainPage />
      </Route>
    </Switch>


    </>
   
  );
}

export default App;
