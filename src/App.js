
import './App.css';
import {Menu} from './components/Menu';
import {Homepage} from "./pages/Homepage";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {Cartpage} from "./pages/Cartpage";
import {Loginpage} from "./pages/Loginpage";
import {Registerpage} from "./pages/Registerpage";

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
      <Route path="/" exact component={Homepage} /> 
      <Route path="/cart" exact component={Cartpage} />
      <Route path="/register" exact component={Registerpage} />
      <Route path="/login" exact component={Loginpage} />
      </BrowserRouter>
       
       {/* <Homepage/> */}
    </div>
  );
}

export default App;
