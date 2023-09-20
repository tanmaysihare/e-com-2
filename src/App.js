
import Menu from "./Components/Home/Layout/Menu";
import { Route,Switch,Redirect } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUS/Contact";
import ProductsDetail from "./Components/Home/Products Detail/ProductDetail";



function App() {
 
  return (
    <>
      
        <Menu/>
        
          <Switch>
          
            <Route path="/" exact><Redirect to='/' /></Route>
            
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/home/:productDetailId"><ProductsDetail /> </Route>
        
          </Switch>
        
    
      </>
  );
}

export default App;
