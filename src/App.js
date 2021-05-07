import react from 'react'
import Home from '../src/Component/Home/Home'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../src/Component/Home/Header/Header'
import Men from '../src/Component/Home/Header/Men/Men'
import ACCESSORIES from '../src/Component/Home/Header/Accessories/Accessories' 
import Outlet from '../src/Component/Home/Header/Outlets/Outlets'
import Earth from '../src/Component/Home/Header/Earthmovers/Earthmovers'
import Sale from '../src/Component/Home/Header/Sale/Sale'
import Phone from'../src/Component/Home/Header/PhoneNo/PhoneNo'
import Customer from '../src/Component/Home/Header/CustService/CustService'
import FAQS from '../src/Component/Home/Header/Faqs/Faqs'
import FIND from '../src/Component/Home/Header/FindAStor/FindAStor'
import LogIn from '../src/Component/Home/Header/LogIn/LogIn'
import Footer from '../src/Component/Home/Footer/Footer'
import All from '../src/All/all'
 import CalvinKlein from '../src/Detail/CalvinKlein'

class App extends react.Component{
    render(){
        return(
        
     
      
        <BrowserRouter>
        <Header/>
        <Route exact path="/"component={All}/>
        <Route path="/Men"component={Men}/>
        <Route path="/Accessories" component={ACCESSORIES}/>
        <Route path="/Outlets"component={Outlet}/>
        <Route path="/Earth" component={Earth}/>
        <Route path="/Sale"component={Sale}/>
        <Route path="/+92348-1114747"component={Phone}/>
        <Route path="/CUSTOMERSERVICE"component={Customer}/>
        <Route path="/Faqs"component={FAQS}/>
        <Route path="/Find A Store"component={FIND}/>
        <Route path="/LogIn"component={LogIn}/>
        
        
        <Footer/>
        </BrowserRouter>
     

 
        )
    }
}
export default App