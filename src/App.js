import React,{useEffect,useContext} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {StateContext} from './StateContext';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51JJKslSJslORZ2zS8fHcoQetxWKhM72hOGUbvahISb5AWzA8d3YaaHM5IWvTZvkkQdC6ZyWXTCHBlAAu6v11o6fO00kXdK4vFf'
);


function App() {
  const [{},dispatch] = useContext(StateContext);
  

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //  the user just logged in/the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        // the user islogged out
        dispatch({
          type:'SET_USER',
          user:null
        })
        
      }
    })
  }, [])


  return (
    <div className="app">
      <Router>
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

