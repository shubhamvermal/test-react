import React from 'react';
import { connect } from "react-redux";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.scss'
import { detectIsMobile } from "./actions/global";
import Home from './components/home/Home'
import ItemDetails from './components/itemDetails/ItemDetails'
import LogIn from './components/acounts/LogIn'
import Register from './components/acounts/Register'
import Cart from './components/cart/Cart'

class App extends React.Component {

  componentDidMount = () =>{
      this.props.detectIsMobile()
      window.addEventListener('resize',this.props.detectIsMobile)
  }

  render(){  
    return (
      <div >
        <BrowserRouter>
            <Switch>
              <Route exact path = {'/'} component={Home} />
              <Route exact path = {'/Home'} component={Home} />
              <Route exact path = {'/item/:slug'} component={ItemDetails} />
              <Route exact path = {'/login'} component={LogIn} />
              <Route exact path = {'/register'} component={Register} />
              <Route exact path = {'/cart'} component={Cart} />
            </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>({

  detectIsMobile: ()=> dispatch(detectIsMobile())
  
})


export default connect(null,mapDispatchToProps)(App)