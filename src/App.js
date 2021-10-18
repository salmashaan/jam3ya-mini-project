import "./App.css";
import Jam3yaList from "./Components/Jam3yaList";
import { Route, Switch } from "react-router";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import authStore from "./Stores/AuthStore";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/jam3ya-list">
          <Jam3yaList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
