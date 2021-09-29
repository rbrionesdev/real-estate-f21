import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Available from "./pages/Available";
import Cities from "./pages/Cities";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/available" component={Available} />
        <Route exact path="/cities" component={Cities} />

      </Switch>
    </>
  );
}

export default App;
