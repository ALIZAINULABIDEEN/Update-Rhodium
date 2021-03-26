import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js//bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Readme from './Components/Readme/Readme';
import Nav from "./Components/New/New"


function App() {
  return (

   <Router>
     
    <Switch> 
    <Navbar/>
    {/* <Route exact path="/bog" component={Nav} /> */}
    {/* <Route exact path="" render={(props)=>(<h1>BOG page</h1>)} /> */}
        </Switch>
     
    {/* <Footer/> */}   
    </Router>

   
  );
}

export default App;
